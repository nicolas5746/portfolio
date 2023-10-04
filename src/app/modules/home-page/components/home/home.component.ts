import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  public currentPageTitle: string = `home`;
  public aboutPage: string = `/about`;
  public greeting = {
    welcome: `Welcome to my Portfolio!`,
    greetingPara: `Learn more about me!`,
    imageSrc: `https://i.postimg.cc/8cYZ7P20/laptop-wave.png`,
    imageTitle: `Hello!`,
  };

  ngOnInit(): void {}
}