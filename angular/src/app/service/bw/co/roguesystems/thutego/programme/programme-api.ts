// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgrammeVO } from '@app/model/bw/co/roguesystems/thutego/programme/programme-vo';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeApi {
    
    protected path = '/programme';

    private http = inject(HttpClient);

    public findById(id: number | any ): Observable<ProgrammeVO | any> {

        return this.http.get<ProgrammeVO | any>(this.path + `/${id}/{id}`);
    }

    public getAll(): Observable<ProgrammeVO[] | any[]> {

        return this.http.get<ProgrammeVO[] | any[]>(this.path);
    }

    public remove(id: number | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/${id}/{id}`);
    }

    public save(programme: ProgrammeVO | any ): Observable<ProgrammeVO | any> {

        return this.http.post<ProgrammeVO | any>(this.path, programme);
    }

    public search(criteria: string | any ): Observable<ProgrammeVO[] | any[]> {

        return this.http.get<ProgrammeVO[] | any[]>(this.path + `/search?criteria=${criteria}`);
    }

}