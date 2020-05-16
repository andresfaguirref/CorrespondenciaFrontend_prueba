import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//prime Faces
import {AutoCompleteModule} from 'primeng/autocomplete';
import { FieldsetModule } from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';

import { CUMCO012RoutingModule } from './cumco012-routing/cumco012-routing.module';
import { CUMCO012Component } from './cumco012.component';



@NgModule({
  declarations: [
    CUMCO012Component
  ],
  imports: [
    CommonModule,
    CUMCO012RoutingModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
    FieldsetModule,
    ButtonModule
  ]
})
export class CUMCO012Module { }
