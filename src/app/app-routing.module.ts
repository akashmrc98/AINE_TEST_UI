import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job-catalog',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'job-post',
    pathMatch: 'full',
    loadChildren: () =>
      import('./module/job-poster/job-poster.module').then(
        (m) => m.JobPosterModule
      ),
  },
  {
    path: 'job-catalog',
    loadChildren: () =>
      import('./module/job-catalog/job-catalog.module').then(
        (m) => m.JobCatalogModule
      ),
  },
  {
    path: 'jobs/:id',
    loadChildren: () =>
      import('./module/job-viewer/job-viewer.module').then(
        (m) => m.JobViewerModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./module/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./module/signup/signup.module').then((m) => m.SignUpModule),
  },
  {
    path: 'recuiter',
    loadChildren: () =>
      import('./module/recuiter-creation/recuiter-creation.module').then(
        (m) => m.RecuiterCreationModule
      ),
  },
  {
    path: 'recuiter-dashboard',
    loadChildren: () =>
      import('./module/recuiter-dashboard/recuiter-dashboard.module').then(
        (m) => m.RecuiterDashBoardModule
      ),
  },
  {
    path: 'user',
    pathMatch: 'full',
    loadChildren: () =>
      import('./module/user-creation/user-creation.module').then(
        (m) => m.UserCreationModule
      ),
  },
  {
    path: 'applicant-catalog/:id',
    pathMatch: 'full',
    loadChildren: () =>
      import('./module/applicant-catalog/applicant-catalog.module').then(
        (m) => m.ApplicantCatalogModule
      ),
  },
  {
    path: 'user-dashboard',
    loadChildren: () =>
      import('./module/user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashBoardModule
      ),
  },
  { path: '**', redirectTo: 'page404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
