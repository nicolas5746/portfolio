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

  public pageName1: string = `Simpsons Quotes API`;
  public linkPage1: string = `https://simpsonsquotesapi.netlify.app/`;
  public githubRepo1: string = `https://github.com/nicolas5746/simpsonsquotesapi/`;

  public pageName2: string = `Estadios del Uruguay`;
  public linkPage2: string = `https://estadiosdeluruguay.netlify.app/`;
  public githubRepo2: string = `https://github.com/nicolas5746/estadios/`;

  public pageName3: string = `Automotora Uruguay`;
  public linkPage3: string = `https://automotora-uruguay.netlify.app/`;
  public githubRepo3: string = `https://github.com/nicolas5746/automotora-uruguay/`;

  public projectsPicture = {
    imageAlt: `My Projects`,
    imageSrc: `assets/images/studying.png`,
    imageTitle: `My Projects`,
  };

  ngOnInit(): void {}
}