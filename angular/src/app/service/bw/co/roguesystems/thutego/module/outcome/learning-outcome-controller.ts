// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LearningOutcomeVO } from '@app/model/bw/co/roguesystems/thutego/module/outcome/learning-outcome-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';

@Injectable({
  providedIn: 'root'
})
export class LearningOutcomeController {
    
    protected path = '/module/outcome';

    constructor(private http: HttpClient) {
    }

    public findById(id: number | any ): Observable<LearningOutcomeVO | any> {

        return this.http.get<LearningOutcomeVO | any>(this.path + `/${id}`);

    }

    public findModuleOutcomes(moduleId: number | any ): Observable<LearningOutcomeVO[] | any[]> {

        return this.http.get<LearningOutcomeVO[] | any[]>(this.path + `/module/${moduleId}`);

    }

    public getAll(): Observable<LearningOutcomeVO[] | any[]> {

        return this.http.get<LearningOutcomeVO[] | any[]>(this.path);

    }

    public remove(id: number | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/${id}`);

    }

    public save(learningOutcome: LearningOutcomeVO | any ): Observable<LearningOutcomeVO | any> {

        return this.http.post<LearningOutcomeVO | any>(this.path, learningOutcome);

    }

    public search(criteria: string | any ): Observable<LearningOutcomeVO[] | any[]> {

        return this.http.get<LearningOutcomeVO[] | any[]>(this.path + `/search`);

    }

}