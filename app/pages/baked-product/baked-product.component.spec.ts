/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BakedProductComponent } from './baked-product.component';

describe('BakedProductComponent', () => {
  let component: BakedProductComponent;
  let fixture: ComponentFixture<BakedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
