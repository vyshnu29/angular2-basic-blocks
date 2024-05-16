import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesHwComponent } from './directives-hw.component';

describe('DirectivesHwComponent', () => {
  let component: DirectivesHwComponent;
  let fixture: ComponentFixture<DirectivesHwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivesHwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivesHwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
