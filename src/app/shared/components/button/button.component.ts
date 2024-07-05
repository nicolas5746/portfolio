import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string = ``;
  @Input() inputLink: string = ``;
  @Input() inputRel: string = ``;
  @Input() inputStyle: string = ``;
  @Input() inputTarget: string = ``;
  @Input() inputTitle: string = ``;

  ngOnInit(): void {}
}