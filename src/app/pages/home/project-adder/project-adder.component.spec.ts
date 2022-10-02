import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdderComponent } from './project-adder.component';

describe('ProjectAdderComponent', () => {
  let component: ProjectAdderComponent;
  let fixture: ComponentFixture<ProjectAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
