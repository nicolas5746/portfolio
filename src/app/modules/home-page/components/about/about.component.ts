import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  public currentPageTitle: string = `about me`;
  public projectsPage: string = `/projects`;

  public fullName: string = `nicolás batista piñeyro`;
  public profileHeading: string = `I'm a Frontend and Java Developer.`;
  public introduction: string = `Hello my name is`;
  public description1: string = `I'm proficient in JavaScript and TypeScript`;
  public description2: string = `Proficient in CSS, and preprocessors such as SASS and SCSS`;
  public description3: string = `Skilled in Node.js`;
  public description4: string = `I have built websites with Angular, React, and Vue`;
  public description5: string = `This portfolio itself was built with Angular 14`;
  public description6: string = `Follow my projects!`;

  public myProfilePicture = {
    imageAlt: `My Profile Picture`,
    imageSrc: `assets/images/profile.jpg`,
    imageTitle: `My Profile Picture`,
  };

  ngOnInit(): void {}
}