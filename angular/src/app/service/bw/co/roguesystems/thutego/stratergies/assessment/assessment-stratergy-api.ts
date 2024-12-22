// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AssessmentStrategyVO } from '@app/model/bw/co/roguesystems/thutego/stratergies/assessment/assessment-strategy-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';

@Injectable({
  providedIn: 'root'
})
export class AssessmentStratergyApi {
    
    protected path = '/stratergy/assessment';

    private http = inject(HttpClient);

    public findById(id: number | any ): Observable<AssessmentStrategyVO | any> {

        return this.http.get<AssessmentStrategyVO | any>(this.path + `/${id}/{id}`);
    }

    public getAll(): Observable<AssessmentStrategyVO[] | any[]> {

        return this.http.get<AssessmentStrategyVO[] | any[]>(this.path);
    }

    public remove(id: number | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/${id}/{id}`);
    }

    public save(assessmentStratergy: AssessmentStrategyVO | any ): Observable<AssessmentStrategyVO | any> {

        return this.http.post<AssessmentStrategyVO | any>(this.path, assessmentStratergy);
    }

    public search(criteria: string | any ): Observable<AssessmentStrategyVO[] | any[]> {

        return this.http.post<AssessmentStrategyVO[] | any[]>(this.path + `/search?criteria=${criteria}`, criteria);
    }

}
