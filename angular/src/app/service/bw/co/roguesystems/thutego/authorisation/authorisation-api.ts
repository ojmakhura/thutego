// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorisationDTO } from '@app/model/bw/co/roguesystems/thutego/authorisation/authorisation-dto';
import { AuthorisationListDTO } from '@app/model/bw/co/roguesystems/thutego/authorisation/authorisation-list-dto';
import { AuthorisationCriteria } from '@app/model/bw/co/roguesystems/thutego/authorisation/authorisation-criteria';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';

@Injectable({
  providedIn: 'root'
})
export class AuthorisationApi {
    
    protected path = '/authorisation';

    private http = inject(HttpClient);

    public findById(id: number | any ): Observable<AuthorisationDTO | any> {

        return this.http.get<AuthorisationDTO | any>(this.path + `/id/${id}`);
    }

    public findByRolesAndUrl(url: string | any , roles: Array<string> | any ): Observable<AuthorisationListDTO[] | any[]> {

        return this.http.get<AuthorisationListDTO[] | any[]>(this.path + `/find-by-roles-url?url=${url}&roles=${roles}`);
    }

    public findByRolesAndUrlPaged(url: string | any , roles: Array<string> | any , pageNumber: number | any , pageSize: number | any ): Observable<Page<AuthorisationListDTO>[] | any[]> {

        return this.http.get<Page<AuthorisationListDTO>[] | any[]>(this.path + `/find-by-roles-url/page/{pageNumber}/size/{pageSize}/pageNumber/${pageNumber}/pageSize/${pageSize}?url=${url}&roles=${roles}`);
    }

    public findRestrictedViewItems(url: string | any , roles: Array<string> | any ): Observable<AuthorisationListDTO[] | any[]> {

        return this.http.get<AuthorisationListDTO[] | any[]>(this.path + `/restricted-view-items?url=${url}&roles=${roles}`);
    }

    public getAccessTypeCodeAuthorisations(roles: Array<string> | any , accessPointTypeCodes: Array<string> | any ): Observable<AuthorisationListDTO[] | any[]> {

        return this.http.get<AuthorisationListDTO[] | any[]>(this.path + `/authorised?roles=${roles}&accessPointTypeCodes=${accessPointTypeCodes}`);
    }

    public getAccessTypeCodeAuthorisationsPaged(roles: Array<string> | any , accessPointTypeCodes: Array<string> | any , pageNumber: number | any , pageSize: number | any ): Observable<Page<AuthorisationListDTO>[] | any[]> {

        return this.http.get<Page<AuthorisationListDTO>[] | any[]>(this.path + `/authorised/page/${pageNumber}/size/${pageSize}?roles=${roles}&accessPointTypeCodes=${accessPointTypeCodes}`);
    }

    public getAll(): Observable<AuthorisationListDTO[] | any[]> {

        return this.http.get<AuthorisationListDTO[] | any[]>(this.path + `/all`);
    }

    public getAllPaged(pageNumber: number | any , pageSize: number | any ): Observable<Page<AuthorisationListDTO> | any> {

        return this.http.get<Page<AuthorisationListDTO> | any>(this.path + `/page/${pageNumber}/size/${pageSize}`);
    }

    public remove(id: number | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/id/${id}`);
    }

    public save(authorisation: AuthorisationDTO | any ): Observable<AuthorisationDTO | any> {

        return this.http.post<AuthorisationDTO | any>(this.path, authorisation);
    }

    public search(criteria: AuthorisationCriteria | any ): Observable<AuthorisationListDTO[] | any[]> {

        return this.http.post<AuthorisationListDTO[] | any[]>(this.path + `/search`, criteria);
    }

    public searchPaged(criteria: SearchObject<AuthorisationCriteria> | any ): Observable<Page<AuthorisationListDTO>[] | any[]> {

        return this.http.post<Page<AuthorisationListDTO>[] | any[]>(this.path + `/search/paged`, criteria);
    }

}
