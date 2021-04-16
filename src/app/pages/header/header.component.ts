import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { Category } from './../../shared/models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sCategoryTitle?: string;
  @Input() selectedCategory?: string;
  @Input() categories: Category[] = [];
  @Output() callSelectPage = new EventEmitter<string>();
  @Output() callSelectC = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.setTitle();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.selectedCategory) {
      this.selectedCategory = changes.selectedCategory.currentValue;
      this.setTitle();
    }
  }

  select(target: string): void {
    this.callSelectC.emit(target);
  }

  setTitle(): void {
    const category =
      this.categories.filter((item) => item.value === this.selectedCategory);
      this.sCategoryTitle =
      category?.[0] ? category[0].title : 'Home';
  }

}
