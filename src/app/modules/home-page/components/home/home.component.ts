import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  public currentPageTitle: string = `home`;
  public aboutPage: string = `/about`;

  public greeting: string = `Welcome to my Portfolio!`;
  public paragraph1: string = `Learn more about me!`;

  public greetingPicture = {
    imageAlt: `Hello!`,
    imageSrc: `assets/images/laptop-wave.png`,
    imageTitle: `Hello!`,
  };

  ngOnInit(): void {}
}