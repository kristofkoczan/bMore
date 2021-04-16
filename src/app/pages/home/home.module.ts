import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { CoursesModule } from './../courses/courses.module';
import { CourseCardModule } from '../courses/card/course-card.module';
import { OnHoverModule } from '../../shared/directives/on-hover/on-hover.module';
import { AboutMeModule } from './../about-me/about-me.module';
import { HomeCardModule } from './home-card/home-card.module';
import { MatRippleModule } from '@angular/material/core';
import { LoginModule } from './../login/login.module';
import { PhotographyCardModule } from '../photography/photography-card/photography-card.module';
import { PhotographyChipsModule } from './../photography/photography-chips/photography-chips.module';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HeaderModule,
    CoursesModule,
    CourseCardModule,
    OnHoverModule,
    AboutMeModule,
    HomeCardModule,
    MatRippleModule,
    LoginModule,
    PhotographyCardModule,
    PhotographyChipsModule
     ],
  exports: [HomeComponent]
})
export class HomeModule { }
