import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./access/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home/:type',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'analitycs/:type',
    loadComponent: () =>
      import('./home/views/analitycs/analitycs.component').then(
        (m) => m.AnalitycsComponent
      ),
  },
  {
    path: 'checkIn/:type',
    loadComponent: () =>
      import('./home/views/check-in/check-in.component').then(
        (m) => m.CheckInComponent
      ),
  },
  {
    path: 'create/:type',
    loadComponent: () =>
      import('./home/views/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  // {
  //   path: 'events',
  //   loadComponent: () =>
  //     import('./home/views/events/events.component').then(
  //       (m) => m.EventsComponent
  //     ),
  // },
  {
    path: 'export/:type',
    loadComponent: () =>
      import('./home/views/export/export.component').then(
        (m) => m.ExportComponent
      ),
  },
  {
    path: 'scan/:type',
    loadComponent: () =>
      import('./home/views/scan/scan.component').then((m) => m.ScanComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
