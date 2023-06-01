import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaddEditEmpComponent } from './aadd-edit-emp.component';

describe('AaddEditEmpComponent', () => {
  let component: AaddEditEmpComponent;
  let fixture: ComponentFixture<AaddEditEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AaddEditEmpComponent]
    });
    fixture = TestBed.createComponent(AaddEditEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
