import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentComponentComponent } from './appointment-component.component';

describe('AppointmentComponentComponent', () => {
  let component: AppointmentComponentComponent;
  let fixture: ComponentFixture<AppointmentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
