import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CUMCO012Component } from '../cumco012.component';


const routes: Routes = [
  {path: 'Cumco012', component: CUMCO012Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CUMCO012RoutingModule { }
