import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  public currentPageTitle: string = `contact`;

  public homePage: string = `/`;

  public contactCard = {
    buttonText: `Say Hi!`,
    buttonStyle: `padding: 2.5%`,
    emailPara: `Send me an e-mail`,
    email: `mailto:nicolas26386@gmail.com`,
    imageAlt: `Contact me`,
    imageSrc: `assets/images/yay.png`,
    imageTitle: `Contact me`,
    rel: `noopener noreferrer`,
    target: `_blank`,
  }

  ngOnInit(): void {}
}