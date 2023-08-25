import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAnimationComponent } from './example-animation.component';

describe('ExampleAnimationComponent', () => {
  let component: ExampleAnimationComponent;
  let fixture: ComponentFixture<ExampleAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleAnimationComponent]
    });
    fixture = TestBed.createComponent(ExampleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
