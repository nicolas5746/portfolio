import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/home-page/pages/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('@modules/home-page/pages/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('@modules/home-page/pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('@modules/home-page/pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('@modules/home-page/pages/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}