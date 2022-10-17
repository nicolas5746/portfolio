import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
})
export class NotFoundComponent implements OnInit {
  public backButton: string = `go back`;
  public errorCode: string = `404`;
  public errorCodeMsg: string = `page not found`;

  public pageNotFoundPicture = {
    imageAlt: `Page not found`,
    imageSrc: `assets/images/thumbs-down.png`,
    imageTitle: `Page not found`,
  };

  ngOnInit(): void {}
}