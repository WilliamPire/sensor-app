import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/services/dashboard.service';
import { Consolidado } from 'src/models/consolidado.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  options: any;
  sensoresRegiao: Consolidado[] = [];

  isLoadingResults = true;

  constructor(private service: DashboardService) { }

  ngOnInit() {

    this.service.listarGrafico().subscribe(res => {
      this.data = {
        labels: res.labels,
        datasets: [
          {
            data: res.data,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
      };
      this.options = {
        title: {
          display: true,
          text: 'Eventos Status',
          fontSize: 16
        },
        legend: {
          position: 'left'
        }
      };
      this.isLoadingResults = false;
    }, (err) => {
      console.error(err);
      this.isLoadingResults = false;
    });

    this.service.listarConsolidado().subscribe(res => {
      this.sensoresRegiao = res;
      this.isLoadingResults = false;
    }, (err) => {
      console.error(err);
      this.isLoadingResults = false;
    });

  }

}
