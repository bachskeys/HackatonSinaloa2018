import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistentesComponent } from './assistentes.component';

describe('AssistentesComponent', () => {
  let component: AssistentesComponent;
  let fixture: ComponentFixture<AssistentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
