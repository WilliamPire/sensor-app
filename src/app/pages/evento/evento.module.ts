import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoRoutingModule } from './evento-routing.module';
import { GridComponent } from './grid/grid.component';
import {
  MatTableModule, MatPaginatorModule,
  MatSortModule, MatProgressSpinnerModule,
  MatSpinner, MatButtonModule,
  MatIconModule, MatIcon,
  MatInputModule, MatInput,
  MatTooltipModule, MatTooltip,
  MatListModule, MatGridListModule, MatGridList,
  MatSelectModule, MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    EventoRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule
  ],
  exports: [
    MatSpinner,
    MatIcon,
    MatInput,
    MatTooltip,
    MatGridList
  ]
})
export class EventoModule { }
