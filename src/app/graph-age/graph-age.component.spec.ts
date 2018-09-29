import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAgeComponent } from './graph-age.component';

describe('GraphAgeComponent', () => {
  let component: GraphAgeComponent;
  let fixture: ComponentFixture<GraphAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
