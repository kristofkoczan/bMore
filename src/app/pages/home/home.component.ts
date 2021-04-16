import { Component, OnDestroy, OnInit } from '@angular/core';
import { COURSES } from '../../shared/database/course.database';
import { CATEGORIES } from './../../shared/database/category.database';
import { PICTURES } from './../../shared/database/picture.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories = CATEGORIES;

  courses = COURSES;
  pictures = PICTURES;
  category?= '';
  page = 'home';


  constructor() { }

  ngOnInit(): void {
    this.category = 'home';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  onSelect(event: string): void {
    this.category = event;
  }





}