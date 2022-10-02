import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAdderComponent } from './task-adder.component';

describe('TaskAdderComponent', () => {
  let component: TaskAdderComponent;
  let fixture: ComponentFixture<TaskAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
