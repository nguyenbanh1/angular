import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComTempDisplayingDataComponent } from './com-temp-displaying-data.component';

describe('ComTempDisplayingDataComponent', () => {
  let component: ComTempDisplayingDataComponent;
  let fixture: ComponentFixture<ComTempDisplayingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComTempDisplayingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComTempDisplayingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
