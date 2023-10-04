import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from '@modules/home-page/components/projects/projects.component';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, RouterModule, SharedModule],
})
export class ProjectsModule {}