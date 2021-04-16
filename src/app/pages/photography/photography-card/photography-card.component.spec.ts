import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyCardComponent } from './photography-card.component';

describe('PhotographyCardComponent', () => {
  let component: PhotographyCardComponent;
  let fixture: ComponentFixture<PhotographyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
