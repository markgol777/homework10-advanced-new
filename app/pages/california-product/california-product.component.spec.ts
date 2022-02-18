/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CaliforniaProductComponent } from './california-product.component';

describe('CaliforniaProductComponent', () => {
  let component: CaliforniaProductComponent;
  let fixture: ComponentFixture<CaliforniaProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaliforniaProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliforniaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
