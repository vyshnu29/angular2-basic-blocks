import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingHwComponent } from './data-binding-hw.component';

describe('DataBindingHwComponent', () => {
  let component: DataBindingHwComponent;
  let fixture: ComponentFixture<DataBindingHwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataBindingHwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataBindingHwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
