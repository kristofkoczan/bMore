import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card.component';



@NgModule({
  declarations: [ CourseCardComponent ],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [ CourseCardComponent ] 
})
export class CourseCardModule { }
