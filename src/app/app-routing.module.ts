import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboards', pathMatch: 'full' },
  { path: 'dashboards', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'eventos', loadChildren: './pages/evento/evento.module#EventoModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
