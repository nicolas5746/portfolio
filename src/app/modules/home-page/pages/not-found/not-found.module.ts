import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from '@modules/home-page/components/not-found/not-found.component';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRoutingModule, SharedModule],
})
export class NotFoundModule {}