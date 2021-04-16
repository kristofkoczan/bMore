import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Category } from './../../../shared/models/category.model';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  @Input() item ?: Category;
  sCategoryTitle?: string;
  @Input() selectedCategory ?: string;
  @Input() categories ?: Category[];
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
    const category = this.item;
    this.sCategoryTitle = this.item?.title;
  }

}
