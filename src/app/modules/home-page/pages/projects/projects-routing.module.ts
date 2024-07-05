import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from '@modules/home-page/components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProjectsComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'projects', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}