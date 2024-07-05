import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from '@modules/home-page/components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ContactComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'contact', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}