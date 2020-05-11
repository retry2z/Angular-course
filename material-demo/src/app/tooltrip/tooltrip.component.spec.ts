import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltripComponent } from './tooltrip.component';

describe('TooltripComponent', () => {
  let component: TooltripComponent;
  let fixture: ComponentFixture<TooltripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
