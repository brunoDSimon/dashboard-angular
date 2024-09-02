import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLateralCommonsComponent } from './modal-lateral-commons.component';

describe('ModalLateralCommonsComponent', () => {
  let component: ModalLateralCommonsComponent;
  let fixture: ComponentFixture<ModalLateralCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLateralCommonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLateralCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
