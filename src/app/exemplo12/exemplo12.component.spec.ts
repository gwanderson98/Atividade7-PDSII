import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo12Component } from './exemplo12.component';

describe('Exemplo12Component', () => {
  let component: Exemplo12Component;
  let fixture: ComponentFixture<Exemplo12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
