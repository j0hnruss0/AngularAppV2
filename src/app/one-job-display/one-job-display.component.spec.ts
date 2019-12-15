import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneJobDisplayComponent } from './one-job-display.component';

describe('OneJobDisplayComponent', () => {
  let component: OneJobDisplayComponent;
  let fixture: ComponentFixture<OneJobDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneJobDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneJobDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
