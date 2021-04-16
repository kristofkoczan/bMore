import { Component, OnInit, Input } from '@angular/core';
import { Picture } from './../../../shared/models/picture.model';

@Component({
  selector: 'app-photography-card',
  templateUrl: './photography-card.component.html',
  styleUrls: ['./photography-card.component.scss']
})
export class PhotographyCardComponent implements OnInit {
  @Input() picture ?: Picture;

  constructor() { }

  ngOnInit(): void {
  }

}
