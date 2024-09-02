import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCommonsComponent } from './input-commons.component';

describe('InputCommonsComponent', () => {
  let component: InputCommonsComponent;
  let fixture: ComponentFixture<InputCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCommonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
