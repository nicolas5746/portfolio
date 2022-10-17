import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from '@modules/home-page/components/contact/contact.component';

import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, RouterModule, SharedModule],
})
export class ContactModule {}