import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
})
export class NotFoundComponent implements OnInit {
  public homePage: string = `/`;

  public errorCode: string = `404`;
  public errorCodeMsg: string = `page not found`;
  public buttonText: string = `go back`;
  public buttonStyle: string = `padding: 0.3%`;

  public pageNotFoundPicture = {
    imageAlt: `Page not found`,
    imageSrc: `assets/images/thumbs-down.png`,
    imageTitle: `Page not found`,
  };

  ngOnInit(): void {}
}