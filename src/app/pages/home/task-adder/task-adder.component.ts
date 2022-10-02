import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Task } from 'src/app/models/Task';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.css']
})
export class TaskAdderComponent implements OnInit {

  @Input('project')
  public project?: Project

  @Input('parent')
  public parent?: Task

  @Output('add')
  public readonly add: EventEmitter<Task> = new EventEmitter<Task>();

  @Output() refreshClick: EventEmitter<any> = new EventEmitter<any>();

  public readonly newTask: Task = new Task();

  public isAdding: boolean = false;


  constructor(
    private readonly takSv: TaskService
  ) { }

  ngOnInit(): void {
  }

  submit() {

    if(!this.project) throw new Error("Project was null");
    
    this.takSv.add(this.project.id, this.parent?.id, this.newTask);

    this.isAdding = false;

    this.onRefreshClick();
  }

  onRefreshClick() {
    this.refreshClick.emit();
  }
}
