import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Products1RoutingModule } from './products1-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    Products1RoutingModule,
    PrimeNgModule
  ]
})
export class Products1Module { }
