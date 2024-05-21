import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Products1RoutingModule } from './products1-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToogglePipeTsPipe } from './pipes/tooggle.pipe.ts.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToogglePipeTsPipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    Products1RoutingModule,
    PrimeNgModule
  ]
})
export class Products1Module { }
