import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesTructuralComponent } from './directives-tructural.component';

describe('DirectivesTructuralComponent', () => {
  let component: DirectivesTructuralComponent;
  let fixture: ComponentFixture<DirectivesTructuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesTructuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesTructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
