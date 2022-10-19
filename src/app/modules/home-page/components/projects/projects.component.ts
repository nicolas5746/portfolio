import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  public currentPageTitle: string = `my projects`;
  public contactPage: string = `/contact`;

  public githubRepository: string = `github repository`;

  public pageBuiltWith: string = `Built with`;
  public angular: string = `angular`;
  public react: string = `react`;
  public vue2: string = `vue 2`;
  public vue3: string = `vue 3`;

  public pageName1: string = `simpsons quotes api`;
  public linkPage1: string = `https://simpsonsquotesapi.netlify.app/`;
  public githubRepo1: string = `https://github.com/nicolas5746/simpsonsquotesapi/`;

  public pageName2: string = `estadios del uruguay`;
  public linkPage2: string = `https://estadiosdeluruguay.netlify.app/`;
  public githubRepo2: string = `https://github.com/nicolas5746/estadios/`;

  public pageName3: string = `automotora uruguay`;
  public linkPage3: string = `https://automotora-uruguay.netlify.app/`;
  public githubRepo3: string = `https://github.com/nicolas5746/automotora-uruguay/`;

  public projectsPicture = {
    imageAlt: `My Projects`,
    imageSrc: `assets/images/studying.png`,
    imageTitle: `My Projects`,
  };

  ngOnInit(): void {}
}