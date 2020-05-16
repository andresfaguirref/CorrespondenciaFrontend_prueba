import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CUMCO001Component } from '../cumco001.component';


const routes: Routes = [
  {path: 'ejemploCumco001', component: CUMCO001Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CUMCO001RoutingModule { }

