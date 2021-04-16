import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ AboutMeComponent ],
  imports: [
  CommonModule, MatCardModule, MatButtonModule
  ],
  exports: [ AboutMeComponent ] 
})
export class AboutMeModule { }
