import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokugameComponent } from './sudokugame.component';

describe('SudokugameComponent', () => {
  let component: SudokugameComponent;
  let fixture: ComponentFixture<SudokugameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokugameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SudokugameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
