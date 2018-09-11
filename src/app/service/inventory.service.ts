import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    constructor(private _http: HttpClient) { }

    getSiderbarMenu(): Observable<any[]> {
        return this._http.get<any[]>('/api/inventory/inventoryDetails');
    }
}
