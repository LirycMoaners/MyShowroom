import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ProjectHeader } from './project-header.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectService {
  private projectHeaderUrl = './assets/config/projects-header.json';
  private projectDetailsUrl = './assets/config/projects-details.json';

  constructor(
    private http: Http
  ) { }

  getAllProjects(): Observable<ProjectHeader[]> {
    return this.http.get(this.projectHeaderUrl).pipe(
      map((res) => res.json() as ProjectHeader[])
    );
  }

  getProjectById(id: number) {

  }
}
