import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  public currentPageTitle: string = `about me`;

  public projectsPage: string = `/projects`;

  public profileCard = {
    introduction: `Hello my name is`,
    fullName: `nicolás batista piñeyro`,
    heading: `I'm a Frontend and Java Developer.`,
    description0: `I'm proficient in JavaScript and TypeScript`,
    description1: `Proficient in CSS, and preprocessors such as SASS and SCSS`,
    description2: `Skilled in Node.js`,
    description3: `I have built websites with Angular, React, and Vue`,
    description4: `This portfolio itself was built with Angular 14`,
    description5: `Follow my projects!`,
    imageAlt: `My Profile Picture`,
    imageSrc: `assets/images/profile.jpg`,
    imageTitle: `My Profile Picture`,
  }

  ngOnInit(): void {}
}