import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  public currentPageTitle: string = `my projects`;
  public contactPage: string = `/contact`;

  public projects = [
    {
      name: `simpsons quotes api`,
      link: `https://simpsonsquotesapi.netlify.app/`,
      language: `react`,
      repository: `https://github.com/nicolas5746/simpsonsquotesapi/`,
      imageAlt: `Simpsons Quotes Api - React`,
      imageSrc: `assets/images/react.png`,
      imageTitle: `Simpsons Quotes Api - React`,
    },
    {
      name: `estadios del uruguay`,
      link: `https://estadiosdeluruguay.netlify.app/`,
      language: `vue 3`,
      repository: `https://github.com/nicolas5746/estadios/`,
      imageAlt: `Estadios del Uruguay - Vue 3`,
      imageSrc: `assets/images/vue3.png`,
      imageTitle: `Estadios del Uruguay - Vue 3`,
    },
    {
      name: `automotora uruguay`,
      link: `https://automotora-uruguay.netlify.app/`,
      language: `vue 2`,
      repository: `https://github.com/nicolas5746/automotora-uruguay/`,
      imageAlt: `Automotora Uruguay - Vue 2`,
      imageSrc: `assets/images/vue2.png`,
      imageTitle: `Automotora Uruguay - Vue 2`,
    },
  ];

  ngOnInit(): void {}
}