import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from 'src/models/evento.model';
import { HttpClient } from '@angular/common/http';
import { Page } from 'src/models/page.model';

@Injectable({
    providedIn: 'root'
})
export class EventoService {

    private apiPath: string = 'http://localhost:58416/api/evento';

    constructor(private http: HttpClient) { }
    
    listarPaginado(sort: string, order: string, page: number, pagesize: number): Observable<Page<Evento>> {
        const url = `${this.apiPath}/sensor/paginado?sort=${sort}&order=${order}&page=${page +1}&pagesize=${pagesize}`;
        return this.http.get<Page<Evento>>(url);
    }
}
