import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.sass'],
})
export class ScrollDownComponent implements OnInit {
  @Input() route: string = '';

  constructor(private router: Router) {}

  goTo(): void {
    this.router.navigate([this.route]);
  }

  ngOnInit(): void {}
}