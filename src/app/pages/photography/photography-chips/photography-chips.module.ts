import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyChipsComponent } from './photography-chips.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ PhotographyChipsComponent ],
  imports: [
    CommonModule, MatChipsModule, MatFormFieldModule, MatIconModule
  ],
  exports: [PhotographyChipsComponent]
})
export class PhotographyChipsModule { }
