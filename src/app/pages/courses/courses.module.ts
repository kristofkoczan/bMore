import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ CoursesComponent ],
  imports: [
    CommonModule,
  ],
  exports: [ CoursesComponent ],
})
export class CoursesModule { }
