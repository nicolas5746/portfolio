import { Component, OnInit } from '@angular/core';

import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
})
export class LoaderComponent implements OnInit {
  public showLoader$ = this.loaderService.loading$;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit(): void {}
}