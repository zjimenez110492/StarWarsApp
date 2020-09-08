/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerNavesComponent } from './ver-naves.component';

describe('VerNavesComponent', () => {
  let component: VerNavesComponent;
  let fixture: ComponentFixture<VerNavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerNavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
