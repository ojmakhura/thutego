// Generated by andromda-angular cartridge (service\service.impl.ts.vsl) CAN EDIT
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '@app/model/bw/co/roguesystems/thutego/user/user-dto';
import { HttpClient } from '@angular/common/http';
import { Page } from '@app/model/page.model';
import { SearchObject } from '@app/model/search-object';

@Injectable({
  providedIn: 'root'
})
export class UserApi {
    
    protected path = '/user';

    private http = inject(HttpClient);

    public addRole(userId: string | any , role: string | any ): Observable<boolean | any> {

        return this.http.put<boolean | any>(this.path + `/role?userId=${userId}&role=${role}`, {userId: userId, role: role});
    }

    public changePassword(userId: string | any , newPassword: string | any ): Observable<string | any> {

        return this.http.get<string | any>(this.path + `/updatePassword?userId=${userId}&newPassword=${newPassword}`);
    }

    public findByClientRoles(roles: Array<string> | any , clientId: string | any ): Observable<UserDTO[] | any[]> {

        return this.http.get<UserDTO[] | any[]>(this.path + `/client/roles?roles=${roles}`);
    }

    public findByRealmRoles(roles: Array<string> | any ): Observable<UserDTO[] | any[]> {

        return this.http.get<UserDTO[] | any[]>(this.path + `/realm/roles?roles=${roles}`);
    }

    public findUserById(userId: string | any ): Observable<UserDTO | any> {

        return this.http.get<UserDTO | any>(this.path + `?userId=${userId}`);
    }

    public loadUsers(): Observable<UserDTO[] | any[]> {

        return this.http.get<UserDTO[] | any[]>(this.path + `/load`);
    }

    public removeRole(userId: string | any , role: string | any ): Observable<boolean | any> {

        return this.http.delete<boolean | any>(this.path + `/role?userId=${userId}&role=${role}`);
    }

    public saveUser(user: UserDTO | any ): Observable<UserDTO | any> {

        return this.http.post<UserDTO | any>(this.path + `/create`, user);
    }

    public search(criteria: string | any ): Observable<UserDTO | any> {

        return this.http.get<UserDTO | any>(this.path + `/search?criteria=${criteria}`);
    }

    public updateUserName(userId: string | any , username: string | any ): Observable<boolean | any> {

        return this.http.patch<boolean | any>(this.path + `/${userId}{userId}?username=${username}`, {userId: userId, username: username});
    }

}