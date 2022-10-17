import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '@modules/home-page/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NotFoundComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class NotFoundRoutingModule {}