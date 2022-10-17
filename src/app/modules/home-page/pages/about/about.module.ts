import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutComponent } from '@modules/home-page/components/about/about.component';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, RouterModule, SharedModule],
})
export class AboutModule {}