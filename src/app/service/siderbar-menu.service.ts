import { Injectable } from '@angular/core';
import { Menu } from '@delon/theme';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SiderbarMenuService {
    constructor(private _http: HttpClient) { }

    getSiderbarMenu(): Observable<Menu[]> {
        return this._http.get<Menu[]>('/api/SystemSetting/SidebarMenu');
    }
}
