import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectHeader } from './shared/project/project-header.model';
import { ProjectService } from './shared/project/project.service';

@Component({
  selector: 'ms-root',
  templateUrl: './my-showroom.component.html',
  styleUrls: ['./my-showroom.component.scss']
})
export class MyShowroomComponent implements OnInit {
  title = 'My Showroom';
  projects: ProjectHeader[] = [];
  breakpoint: number;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getColumnQty(window.innerWidth);
    this.projectService.getAllProjects()
      .subscribe((projects: ProjectHeader[]) => this.projects = projects);
  }

  getColumnQty(innerWidth: number) {
    switch (true) {
      case innerWidth > 1200 :
        this.breakpoint =  3;
        break;
      case innerWidth < 1200 && innerWidth >= 600:
        this.breakpoint =  2;
        break;
      case innerWidth < 600 :
        this.breakpoint =  1;
    }
  }

  navigateToProject(url: string) {
    if (url.startsWith('/')) {
      this.router.navigate([url]);
    } else {
      window.location.href = url;
    }
  }

  switchInfos(project: ProjectHeader, isOpen: boolean) {
    if (isOpen) {
      project.isOpen = false;
    } else {
      project.isOpen = true;
    }
  }
}
