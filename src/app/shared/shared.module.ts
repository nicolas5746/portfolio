import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './components/button/button.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ScrollDownComponent } from './components/scroll-down/scroll-down.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CarouselComponent,
    FooterComponent,
    LoaderComponent,
    NavbarComponent,
    PageTitleComponent,
    ScrollDownComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    CarouselComponent,
    FooterComponent,
    LoaderComponent,
    NavbarComponent,
    PageTitleComponent,
    ScrollDownComponent,
  ],
  providers: [],
})
export class SharedModule {}