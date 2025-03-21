// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { InstitutionVO } from '@app/model/bw/co/roguesystems/thutego/institution/institution-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';

@Injectable({
  providedIn: 'root'
})
export class InstitutionApi {
    
    protected path = '/institution';

    private http = inject(HttpClient);

    public findById(id: number | any ): Observable<InstitutionVO | any> {

        return this.http.get<InstitutionVO | any>(this.path + `/${id}`);
    }

    public getAll(): Observable<InstitutionVO[] | any[]> {

        return this.http.get<InstitutionVO[] | any[]>(this.path);
    }

    public getAllPaged(pageNumber: number | any , pageSize: number | any ): Observable<Page<InstitutionVO> | any> {

        return this.http.get<Page<InstitutionVO> | any>(this.path + `/page/${pageNumber}/size/${pageSize}`);
    }

    public pagedSearch(criteria: SearchObject<string> | any ): Observable<Page<InstitutionVO> | any> {

        return this.http.post<Page<InstitutionVO> | any>(this.path + `/search/page`, criteria);
    }

    public remove(id: number | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/${id}`);
    }

    public save(institution: InstitutionVO | any ): Observable<InstitutionVO | any> {

        return this.http.post<InstitutionVO | any>(this.path, institution);
    }

    public search(criteria: string | any ): Observable<InstitutionVO[] | any[]> {

        return this.http.get<InstitutionVO[] | any[]>(this.path + `/search?criteria=${criteria}`);
    }

}
