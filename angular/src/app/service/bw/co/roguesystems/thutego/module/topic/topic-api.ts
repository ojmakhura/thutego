// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicVO } from '@app/model/bw/co/roguesystems/thutego/module/topic/topic-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';

@Injectable({
  providedIn: 'root'
})
export class TopicApi {
    
    protected path = '/module/topic';

    private http = inject(HttpClient);

    public findById(id: number | any ): Observable<TopicVO | any> {

        return this.http.get<TopicVO | any>(this.path + `/${id}`);
    }

    public findModuleOutcomeTopics(learningOutcomeId: number | any ): Observable<TopicVO[] | any[]> {

        return this.http.get<TopicVO[] | any[]>(this.path + `/module/outcome/${learningOutcomeId}`);
    }

    public findModuleTopics(moduleId: number | any ): Observable<TopicVO[] | any[]> {

        return this.http.get<TopicVO[] | any[]>(this.path + `/module/${moduleId}`);
    }

    public getAll(): Observable<TopicVO[] | any[]> {

        return this.http.get<TopicVO[] | any[]>(this.path);
    }

    public remove(id: number | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/${id}`);
    }

    public save(topic: TopicVO | any ): Observable<TopicVO | any> {

        return this.http.post<TopicVO | any>(this.path, topic);
    }

    public search(criteria: string | any ): Observable<TopicVO[] | any[]> {

        return this.http.get<TopicVO[] | any[]>(this.path + `/search?criteria=${criteria}`);
    }

}
