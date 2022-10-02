import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from './project.service';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private readonly projectSv: ProjectService
  ) { }

  add(projectId: number, parentId: number = -1, task: Omit<Task, "id">) {

    this.projectSv.getAll().subscribe(projects => {

      const proj = projects.find(i => i.id === projectId);

      if (!proj)
        throw new Error('Project not found');

      const parent = proj.tasks.flat(24).find(i => i.id === parentId)

      const newTask: Task = {
        id: this.projectSv.idGenerator(),
        ...task,
      };

      if (parent) {
        parent.children.push(newTask);
      }
      else {
        proj.tasks.push(newTask);
      }

      this.projectSv.setLocal(projects);
      
    });

  }

}
