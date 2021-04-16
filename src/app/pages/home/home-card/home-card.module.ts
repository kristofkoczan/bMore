import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from './home-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [ HomeCardComponent ],
  imports: [ CommonModule, MatCardModule, MatButtonModule, MatRippleModule ],
  exports: [ HomeCardComponent ]
})
export class HomeCardModule { }
