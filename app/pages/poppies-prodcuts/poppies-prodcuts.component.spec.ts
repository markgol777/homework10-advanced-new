/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoppiesProdcutsComponent } from './poppies-prodcuts.component';

describe('PoppiesProdcutsComponent', () => {
  let component: PoppiesProdcutsComponent;
  let fixture: ComponentFixture<PoppiesProdcutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoppiesProdcutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoppiesProdcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
