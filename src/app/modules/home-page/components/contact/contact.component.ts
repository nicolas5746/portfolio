import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  public currentPageTitle: string = `contact`;

  public homePage: string = `/`;

  public emailPara: string = `Send me an e-mail`;
  public email: string = `mailto:nicolas26386@gmail.com`;
  public rel: string = `noopener noreferrer`;
  public target: string = `_blank`;
  public buttonText: string = `Say Hi!`;
  public buttonStyle: string = `padding: 2.5%`;

  public contactPicture = {
    imageAlt: `Contact me`,
    imageSrc: `assets/images/yay.png`,
    imageTitle: `Contact me`,
  };

  ngOnInit(): void {}
}