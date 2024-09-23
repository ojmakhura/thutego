include ./Makefile.dev

gen_self_certs:
ifdef domain
	mkcert -key-file deployment/certs/${domain}.key -cert-file deployment/certs/${domain}.crt ${domain} keycloak.${domain} api.${domain} db.${domain} proxy.${domain} prometheus.${domain} portainer.${domain} unsee.${domain} grafana.${domain} *.${domain}
else
	mkcert -key-file deployment/certs/localhost.key -cert-file deployment/certs/localhost.crt localhost keycloak.localhost api.localhost db.localhost proxy.localhost prometheus.localhost portainer.localhost unsee.localhost grafana.localhost *.localhost
endif

build_common:
	mvn -f common install -DskipTests=true -o

build_core:
	mvn -f core install -DskipTests=true -o

test_core: 
	. ./.env && mvn -f core test -o

build_api:
	. ./.env && mvn -f webservice install -DskipTests=true -o

test_api: 
	. ./.env && mvn -f webservice test -o
	
build_native: gen_env 
	. ./.env && mvn -f ${module} clean native:compile -Pnative -DskipTests -o

colon = :
native_image_tracing: gen_env
	. ./.env && timeout 40 ${JAVA_HOME}/bin/java -agentlib${colon}native-image-agent=config-output-dir=./${service}/src/main/resources/META-INF/native-image -jar ./${service}/target/sigmaproduce-${service}-${IMAGE_VERSION}.jar
	
build_web: 
	mvn -f angular install -DskipTests=true -o

build_web_dist: build_web local_web_deps
	. ./.env && cd angular/target/thutego && npm run build --configuration=production

build_app: 
	mvn install -DskipTests=true -o

clean_build: clean_all build_app

clean_all:
	mvn clean -o

clean_module:
	mvn -f ${service} clean -o

##
## Start the docker containers
##
up_proxy: gen_env
	. ./.env && docker compose up -d proxy

up_stack: gen_env
ifdef stack
	chmod 755 .env && . ./.env && docker stack deploy -c docker-compose-${stack}.yml ${STACK_NAME}-${stack}
else
	@echo 'no stack defined. Please run again with `make env=<LOCAL, DEV, TEST, LIVE> stack=<name> up_stack`'
	exit 1
endif

down_stack:
ifdef stack
	docker stack rm ${STACK_NAME}-${stack}
else
	@echo 'no stack defined. Please run again with `make env=<LOCAL, DEV, TEST, LIVE> stack=<name> down_stack`'
	exit 1
endif

run_tests: gen_env test_${module}

run_test: gen_env
	. ./.env && mvn -f ${module} -Dtest=${test} -Dspring.profiles.active=test test -o
	
##
## Build docker images
##
build_image: gen_env
	. ./.env && docker compose -f ${stack_file}.yml build

build_api_image: gen_env build_api
	. ./.env && docker compose build api

build_web_image: gen_env
	. ./.env && docker compose build web

build_images: gen_env build_keycloak_image build_web_image build_api_image build_comm_image


###
## Run the local api and web
###    
run_module_local: gen_env
	. ./.env && mvn -pl ${module} -am spring-boot:run
		
run_api_local: gen_env
	. ./.env && mvn -pl webservice/ -am spring-boot:run

local_web_deps: build_web
	cd angular/target/thutego && npm i

run_web_local: build_web
	cd angular/target/thutego && npm start
# run_local_web: build_local_images up_local_app
stop_app:
	docker compose down

rm_env:
	rm -f .env

gen_env:
	if [ -f .env ]; then \
		rm -f .env; \
	fi
	@$(ENV)
	chmod 755 .env

