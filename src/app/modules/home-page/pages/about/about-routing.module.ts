import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '@modules/home-page/components/about/about.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AboutComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'about', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}