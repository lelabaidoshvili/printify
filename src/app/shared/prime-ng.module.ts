import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from "primeng/splitbutton";
import {TooltipModule} from "primeng/tooltip";
import {TabViewModule} from "primeng/tabview";


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    SplitButtonModule,
    TooltipModule,
    TabViewModule

  ]
})
export class PrimeNgModule { }
