import { Component, OnInit } from '@angular/core';


import {COMMA, ENTER} from '@angular/cdk/keycodes';

import {MatChipInputEvent} from '@angular/material/chips';

export interface Tags {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'app-photography-chips',
  templateUrl: './photography-chips.component.html',
  styleUrls: ['./photography-chips.component.scss']
})
export class PhotographyChipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tags[] = [
    {name: 'Coffee'},
    {name: 'Human'},
    {name: 'Landscape'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tags): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}