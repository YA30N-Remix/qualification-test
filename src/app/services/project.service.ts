import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  /** key to store the data locally */
  readonly PROJECT_TREE: string = "PROJECT_TREE";

  /** url to fetch */
  readonly PROJECT_URL: string = "/assets/projects.json";


  constructor(private http: HttpClient) { }

  /** implement at will */
  idGenerator(): number {
    return +new Date();
  }

  getLocal(): Project[] | undefined {
    const local = localStorage.getItem(this.PROJECT_TREE);

    if (local) {
      const locallyRetrieved: Project[] = JSON.parse(local);
      return locallyRetrieved;
    }

    return undefined;
  }

  setLocal(projects: Project[]): Project[] {
    localStorage.setItem(this.PROJECT_TREE, JSON.stringify(projects));
    return projects;
  }

  getAll(): Observable<Project[]> {

    const local = this.getLocal();

    if (local)
      return of(local);

    type ProjectsJsonSchema = { projects: Project[] };

    // if there was no data previously stored, fetch it
    return this.http.get<ProjectsJsonSchema>(this.PROJECT_URL).pipe(
      map(({ projects }) => this.setLocal(projects))
    );

  }

  add(input: Omit<Project, 'id'>): Project {

    const newProject: Project = {
      ...input,
      id: this.idGenerator()
    }

    const prev = this.getLocal() ?? [];

    const combined = [...prev, newProject];

    this.setLocal(combined);

    return newProject;
  }

  delete(id: number): Project[] {

    const prev = this.getLocal() ?? [];

    const deleted = prev.filter(i => i.id !== id);

    this.setLocal(deleted);

    return deleted;
  }

  edit(id: number, payload: Partial<Project>): Project {

    const prev = this.getLocal() ?? [];

    const tobeEdited = prev.find(i => i.id === id);

    if (!tobeEdited)
      throw new Error(`Project with the id of [${id}] was not found`);

    const edited: Project = {
      ...tobeEdited,
      ...payload // override
    };

    prev.push(edited);

    this.setLocal(prev);

    return edited;
  }

}
