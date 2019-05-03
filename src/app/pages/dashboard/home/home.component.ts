import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  options: any;
  data2: any;
  options2: any;

  constructor(private service: DashboardService) { }

  ngOnInit() {

    this.service.listarGrafico().subscribe(res => {
      debugger;
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

    }, (err) => {

    });



    this.data2 = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [
        {
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

    this.options2 = {
      title: {
        display: true,
        text: 'Crescimento Escolas Estados',
        fontSize: 16
      },
      legend: {
        display: false
      }
    };
  }

}
