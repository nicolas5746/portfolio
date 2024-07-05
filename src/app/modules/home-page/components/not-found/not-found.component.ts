import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
})
export class NotFoundComponent implements OnInit {
  public routes: Array<string> = [`/`, `https://i.postimg.cc/fR9r0mTj/thumbs-down.png`];
  public style: string = `padding: 0.3%`;
  public titles: Array<string> = [`404`, `page not found`, `go home`];

  ngOnInit(): void {}
}