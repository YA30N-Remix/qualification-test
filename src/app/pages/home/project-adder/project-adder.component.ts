import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-adder',
  templateUrl: './project-adder.component.html',
  styleUrls: ['./project-adder.component.css']
})
export class ProjectAdderComponent implements OnInit {

  @Output('add')
  public readonly add: EventEmitter<Project> = new EventEmitter<Project>();

  public readonly newProject: Project = new Project();

  public isAdding: boolean = false;

  @Output() 
  refreshClick: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    private readonly projectSv: ProjectService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {

    const addedProject = this.projectSv.add(this.newProject);
 
    this.isAdding = false;

    this.newProject.name = '';
this.onRefreshClick();
  }

  onRefreshClick() {
    this.refreshClick.emit();
  }
}
