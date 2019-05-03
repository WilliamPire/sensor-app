import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ChartModule } from 'primeng/primeng';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ChartModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
