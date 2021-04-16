import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './../login-form/login-form.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [ LoginFormComponent ],
  imports: [
  CommonModule, MatInputModule
  ],
  exports: [ LoginFormComponent ]
})
export class LoginFormModule { }
