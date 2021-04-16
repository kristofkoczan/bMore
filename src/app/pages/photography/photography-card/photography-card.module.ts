import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyCardComponent } from './photography-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [ PhotographyCardComponent ],
  imports: [
  CommonModule, MatCardModule
  ],
  exports: [PhotographyCardComponent]
})
export class PhotographyCardModule { }
