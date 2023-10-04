import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  public currentPageTitle: string = `about me`;
  public route: string = `/projects`;
  public profileCard = {
    introduction: `Hello my name is`,
    fullName: `nicolás batista piñeyro`,
    heading: `I'm a Frontend and Java Developer.`,
    description: [
      `I'm proficient in JavaScript and TypeScript,`,
      `proficient in CSS, and preprocessors such as SASS and SCSS.`,
      `Skilled in Node.js.`,
      `I have built websites with Angular, React, and Vue.`,
    ],
    imageSrc: `https://i.postimg.cc/Fs2Pmzgf/profile.jpg`,
    imageTitle: `My Profile Picture`,
  };

  ngOnInit(): void {}
}