import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectCommonsComponent } from './input-select-commons.component';

describe('InputSelectCommonsComponent', () => {
  let component: InputSelectCommonsComponent;
  let fixture: ComponentFixture<InputSelectCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSelectCommonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSelectCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
