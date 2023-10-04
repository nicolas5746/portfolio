import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  public menu: Array<string> = [`home`, `about me`, `my projects`, `contact`];
  public routes: Array<string> = [`/`, `/about`, `/projects`, `/contact`];

  ngOnInit(): void {}
}