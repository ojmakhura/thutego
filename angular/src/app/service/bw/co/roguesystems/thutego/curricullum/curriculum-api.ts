// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurriculumVO } from '@app/model/bw/co/roguesystems/thutego/curricullum/curriculum-vo';
import { CurriculumListVO } from '@app/model/bw/co/roguesystems/thutego/curricullum/curriculum-list-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';
import { CurriculumSearchCriteria } from '@app/model/bw/co/roguesystems/thutego/curricullum/curriculum-search-criteria';

@Injectable({
  providedIn: 'root'
})
export class CurriculumApi {

    protected path = '/curriculum';

    constructor(private http: HttpClient) {
    }

    public findById(id: number | any ): Observable<CurriculumVO | any> {

        return this.http.get<CurriculumVO | any>(this.path + `/${id}`);

    }

    public getAll(): Observable<CurriculumListVO[] | any[]> {

        return this.http.get<CurriculumListVO[] | any[]>(this.path);

    }

    public getAllPaged(): Observable<Page<CurriculumListVO> | any> {

        return this.http.get<Page<CurriculumListVO> | any>(this.path + `/paged`);

    }

    public remove(id: number | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/${id}`);

    }

    public save(curriculum: CurriculumVO | any ): Observable<CurriculumVO | any> {

        return this.http.post<CurriculumVO | any>(this.path, curriculum);

    }

    public search(criteria: SearchObject<CurriculumSearchCriteria> | any ): Observable<CurriculumListVO[] | any[]> {

        return this.http.get<CurriculumListVO[] | any[]>(this.path + `/search`);

    }

    public searchPaged(criteria: SearchObject<CurriculumSearchCriteria> | any ): Observable<Page<CurriculumListVO> | any> {

        return this.http.post<Page<CurriculumListVO> | any>(this.path + `/search/paged`, criteria);

    }

}
