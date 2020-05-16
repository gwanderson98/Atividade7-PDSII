import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo11Component } from './exemplo11.component';

describe('Exemplo11Component', () => {
  let component: Exemplo11Component;
  let fixture: ComponentFixture<Exemplo11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
