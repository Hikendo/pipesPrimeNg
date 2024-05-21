import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    TableModule,
    ToolbarModule,

  ]
})
export class PrimeNgModule { }
