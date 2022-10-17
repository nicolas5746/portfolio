import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  public currentPageTitle: string = `contact`;
  public homePage: string = `/`;

  public paragraph1: string = `Send me an e-mail`;
  public hiButton: string = `Say Hi!`;

  public contactPicture = {
    imageAlt: `Contact me`,
    imageSrc: `assets/images/yay.png`,
    imageTitle: `Contact me`,
  };

  ngOnInit(): void {}
}