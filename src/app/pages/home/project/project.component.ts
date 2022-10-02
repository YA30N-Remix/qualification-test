import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { ConfirmDialogComponent } from '../../others/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input('project')
  project?: Project

  @Output() 
  refreshClick: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(
    private projectSv: ProjectService
  ) { }
  
  txtNameVisible: boolean = true;

  ngOnInit(): void {

  }

  onDelete(datarow: Project): void {
    this.projectSv.delete(datarow.id);
  }

  onEdit(): void {
    this.txtNameVisible = false;
  }
 
  onOkEdit(datarow: Project): void {
    debugger
    this.projectSv.edit(datarow.id , datarow);
    this.onRefreshClick();
    this.txtNameVisible = true;
  }
 
  onRefreshClick() {
    this.refreshClick.emit();
  }
}
