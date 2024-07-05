import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  public currentPageTitle: string = `contact`;
  public email: Array<string> = [
    `mailto:nicolasbatista@codeando.es`,
    `noopener noreferrer`,
    `_blank`,
  ];
  public image: string = `https://i.postimg.cc/nrN1HS78/yay.png`;
  public routes: string = `/`;
  public style: string = `padding: 2.5%`;
  public titles: Array<string> = [`say hi!`, `send me an e-mail`, `contact me`];

  ngOnInit(): void {}
}