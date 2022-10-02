import { Component, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public projects?: Project[]

  constructor(private projectSv: ProjectService) {
  }

  ngOnInit(): void {
    this.refresh();
  }

   refresh() {
    this.projectSv.getAll().subscribe(i => {
      this.projects = i
    });
  }

}
