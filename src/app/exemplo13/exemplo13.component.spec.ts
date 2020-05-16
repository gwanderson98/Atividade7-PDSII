import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo13Component } from './exemplo13.component';

describe('Exemplo13Component', () => {
  let component: Exemplo13Component;
  let fixture: ComponentFixture<Exemplo13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
