import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCalendarComponentComponent } from './my-calendar-component.component';

describe('MyCalendarComponentComponent', () => {
  let component: MyCalendarComponentComponent;
  let fixture: ComponentFixture<MyCalendarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCalendarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCalendarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
