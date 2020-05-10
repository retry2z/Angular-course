import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFormDemoComponent } from './password-form-demo.component';

describe('PasswordFormDemoComponent', () => {
  let component: PasswordFormDemoComponent;
  let fixture: ComponentFixture<PasswordFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
