import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateDesignComponent} from "./create-design.component";

const routes: Routes = [
  {
    path: '',
    component: CreateDesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDesignRoutingModule { }
