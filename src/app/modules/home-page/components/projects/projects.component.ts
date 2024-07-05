import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  
  public currentPageTitle: string = `my projects`;
  public contactPage: string = `/contact`;
  public projects: any;
  private url: string = 'https://api.npoint.io/8c300a7c9dbc5ba4e9ac';

  async fetchProjects(): Promise<void> {
    await fetch(this.url)
      .then((response) => response.json())
      .then((data) => (this.projects = data));
  }

  ngOnInit(): void {
    this.fetchProjects();
  }
}