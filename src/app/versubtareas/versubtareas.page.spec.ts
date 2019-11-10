import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersubtareasPage } from './versubtareas.page';

describe('VersubtareasPage', () => {
  let component: VersubtareasPage;
  let fixture: ComponentFixture<VersubtareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersubtareasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersubtareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
