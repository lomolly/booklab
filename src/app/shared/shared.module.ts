import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AddBtnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    NavbarComponent, 
    AddBtnComponent
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
