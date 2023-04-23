import { NgModule } from '@angular/core';
import { CreateDesignRoutingModule } from './create-design-routing.module';
import { CreateDesignComponent } from './create-design.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    CreateDesignComponent
  ],
  imports: [
    SharedModule,
    CreateDesignRoutingModule
  ]
})
export class CreateDesignModule { }
