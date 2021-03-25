import { Component, OnDestroy, OnInit } from '@angular/core';
import { COURSES } from '../../shared/database/course.database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  page?= '';
  filter='';
  
  courses = COURSES;

  constructor() { }

  ngOnInit(): void {
    this.page = 'home';
  }

  ShowCourses = (): void => {
    this.page = 'courses';
  }
  ShowHome = (): void => {
    this.page = 'home';
  }

  ngOnDestroy(): void {
    delete this.page;
  }

}