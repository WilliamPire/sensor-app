import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GraficoEvento } from 'src/models/grafico.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    private apiPath: string = 'http://localhost:58416/api/evento';
    
    //Sensor/Consolidado
    //Sensor/Grafico

    constructor(private http: HttpClient) { }

    listarGrafico(): Observable<GraficoEvento>{
        const url = `${this.apiPath}/Sensor/Grafico`;
        return this.http.get<GraficoEvento>(url);
    }

    /*
      listarGrafico(): Observable<GraficoEvento>{
        const url = `${this.apiPath}/Sensor/Grafico`;
        return this.http.get<GraficoEvento>(this.apiPath);
      }
    */
}
