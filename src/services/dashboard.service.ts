import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GraficoEvento } from 'src/models/grafico.model';
import { HttpClient } from '@angular/common/http';
import { Consolidado } from 'src/models/consolidado.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiPath: string = 'https://sensor.azurewebsites.net/api/evento';
  //private apiPath: string = 'http://localhost:58416/api/evento';

  constructor(private http: HttpClient) { }

  listarGrafico(): Observable<GraficoEvento> {
    const url = `${this.apiPath}/Sensor/Grafico`;
    return this.http.get<GraficoEvento>(url);
  }

  listarConsolidado(): Observable<Consolidado[]> {
    const url = `${this.apiPath}/Sensor/Consolidado`;
    return this.http.get<Consolidado[]>(url);
  }
}
