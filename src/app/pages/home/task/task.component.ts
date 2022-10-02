import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task')
  public task?: Task
  
  @Input('project')
  public project?: Project

  
  @Output() 
  refreshClick: EventEmitter<any> = new EventEmitter<any>();
  
  txtNameVisible: boolean = true;

  constructor() { }

  
  onRefreshClick() {
    this.refreshClick.emit();
  }
  
  onDelete(datarow: Task): void { 
  }

  onEdit(): void {
    this.txtNameVisible = false;
  }
 
  onOkEdit(datarow: Task): void {
    debugger 
    this.onRefreshClick();
    this.txtNameVisible = true;
  }
  ngOnInit(): void {
  }

}
