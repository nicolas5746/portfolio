import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  public currentPageTitle: string = `my projects`;
  public contactPage: string = `/contact`;

  public projects = {
    blank: `_blank`,
    built: `Built with`,
    github: `github repository`,
    imageAlt: `My Projects`,
    imageSrc: `assets/images/studying.png`,
    imageTitle: `My Projects`,
    lang00: `angular`,
    lang01: `react`,
    lang02: `vue 3`,
    lang03: `vue 2`,
  }

  public project00 = {
    name: `simpsons quotes api`,
    link: `https://simpsonsquotesapi.netlify.app/`,
    repository: `https://github.com/nicolas5746/simpsonsquotesapi/`,
  }

  public project01 = {
    name: `estadios del uruguay`,
    link: `https://estadiosdeluruguay.netlify.app/`,
    repository: `https://github.com/nicolas5746/estadios/`,
  }

  public project02 = {
    name: `automotora uruguay`,
    link: `https://automotora-uruguay.netlify.app/`,
    repository: `https://github.com/nicolas5746/automotora-uruguay/`,
  }

  ngOnInit(): void {}
}