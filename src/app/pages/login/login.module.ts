import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoginFormModule } from './login-form/login-form.module';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [ CommonModule, MatCardModule, MatButtonModule, LoginFormModule],
  exports: [ LoginComponent ]
})
export class LoginModule { }
