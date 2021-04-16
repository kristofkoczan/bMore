import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyChipsComponent } from './photography-chips.component';

describe('PhotographyChipsComponent', () => {
  let component: PhotographyChipsComponent;
  let fixture: ComponentFixture<PhotographyChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographyChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
