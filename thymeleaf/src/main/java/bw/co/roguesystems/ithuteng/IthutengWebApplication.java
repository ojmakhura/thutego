package bw.co.roguesystems.ithuteng;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(SharedAutoConfiguration.class)
public class IthutengWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(IthutengWebApplication.class, args);
    }
}