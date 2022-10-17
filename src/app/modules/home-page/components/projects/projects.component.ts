import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  public currentPageTitle: string = `my projects`;
  public contactPage: string = `/contact`;

  public githubRepository: string = `Github Repository`;

  public pageBuiltWith: string = `Built with`;
  public angular: string = `Angular`;
  public react: string = `React`;
  public vue2: string = `Vue 2`;
  public vue3: string = `Vue 3`;

  public pageName1: string = `Estadios del Uruguay`;
  public linkPage1: string = `https://estadiosdeluruguay.netlify.app/`;

  public pageName2: string = `Automotora Uruguay`;
  public linkPage2: string = `https://automotora-uruguay.netlify.app/`;

  public projectsPicture = {
    imageAlt: `My Projects`,
    imageSrc: `assets/images/studying.png`,
    imageTitle: `My Projects`,
  };

  ngOnInit(): void {}
}