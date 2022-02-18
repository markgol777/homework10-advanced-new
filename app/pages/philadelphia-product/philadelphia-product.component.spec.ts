/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhiladelphiaProductComponent } from './philadelphia-product.component';

describe('PhiladelphiaProductComponent', () => {
  let component: PhiladelphiaProductComponent;
  let fixture: ComponentFixture<PhiladelphiaProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhiladelphiaProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhiladelphiaProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
