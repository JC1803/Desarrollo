import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdashPage } from './verdash.page';

describe('VerdashPage', () => {
  let component: VerdashPage;
  let fixture: ComponentFixture<VerdashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerdashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
