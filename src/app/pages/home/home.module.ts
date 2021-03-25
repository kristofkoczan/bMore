import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../../shared/header/header.module';
import { CoursesModule } from './../courses/courses.module';
import { CourseCardModule } from '../courses/card/course-card.module';
import { OnHoverModule } from '../../shared/directives/on-hover/on-hover.module'

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HeaderModule,
    CoursesModule,
    CourseCardModule,
    OnHoverModule
    ],
  exports: [HomeComponent]
})
export class HomeModule { }
