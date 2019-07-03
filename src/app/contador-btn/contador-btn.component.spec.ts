import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorBtnComponent } from './contador-btn.component';

describe('ContadorBtnComponent', () => {
  let component: ContadorBtnComponent;
  let fixture: ComponentFixture<ContadorBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
