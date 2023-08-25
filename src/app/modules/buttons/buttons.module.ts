import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDefaultComponent } from './button-default/button-default.component';



@NgModule({
  declarations: [
    ButtonDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDefaultComponent
  ]
})
export class ButtonsModule { }
