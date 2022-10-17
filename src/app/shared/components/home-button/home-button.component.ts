import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.sass'],
})
export class HomeButtonComponent implements OnInit {
  @Input() homeButton: string = ``;

  ngOnInit(): void {}
}