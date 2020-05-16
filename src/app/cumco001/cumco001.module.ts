import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CUMCO001RoutingModule } from '../cumco001/cumco001-routing/cumco001-routing.module';
import { CUMCO001Component } from '../cumco001/cumco001.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//prime Faces
//import { AutoCompleteModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    CUMCO001Component
  ],
  imports: [
    CommonModule,
    CUMCO001RoutingModule,
    FormsModule,
    HttpClientModule,
    //AutoCompleteModule,
    FieldsetModule
  ]
})
export class CUMCO001Module { }
