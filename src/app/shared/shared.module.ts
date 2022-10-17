import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClockComponent } from './components/clock/clock.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ScrollDownComponent } from './components/scroll-down/scroll-down.component';

import { LoaderInterceptor } from '@core/interceptors/loader.interceptor';

@NgModule({
  declarations: [
    ClockComponent,
    FooterComponent,
    HomeButtonComponent,
    LoaderComponent,
    NavbarComponent,
    PageTitleComponent,
    ScrollDownComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [
    ClockComponent,
    FooterComponent,
    HomeButtonComponent,
    LoaderComponent,
    NavbarComponent,
    PageTitleComponent,
    ScrollDownComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class SharedModule {}