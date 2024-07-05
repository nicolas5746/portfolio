import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '@modules/home-page/components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, RouterModule, SharedModule],
})
export class HomeModule {}