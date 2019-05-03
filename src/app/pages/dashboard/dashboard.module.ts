import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ChartModule } from 'primeng/primeng';
import { MatProgressSpinnerModule, MatSpinner, MatIconModule , MatListModule} from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule    
  ],
  exports: [MatSpinner]
})
export class DashboardModule { }
