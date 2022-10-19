import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
})
export class NotFoundComponent implements OnInit {
  public homePage: string = `/`;

  public notFound = {
    errorCode: `404`,
    errorCodeMsg: `page not found`,
    buttonText: `go back`,
    buttonStyle: `padding: 0.3%`,
    imageAlt: `Page not found`,
    imageSrc: `assets/images/thumbs-down.png`,
    imageTitle: `Page not found`,
  }

  ngOnInit(): void {}
}