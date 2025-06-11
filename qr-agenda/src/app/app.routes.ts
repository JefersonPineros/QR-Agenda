import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./access/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'analitycs',
    loadComponent: () =>
      import('./home/views/analitycs/analitycs.component').then(
        (m) => m.AnalitycsComponent
      ),
  },
  {
    path: 'checkIn',
    loadComponent: () =>
      import('./home/views/check-in/check-in.component').then(
        (m) => m.CheckInComponent
      ),
  },
  {
    path: 'event-details',
    loadComponent: () =>
      import('./home/views/check-in/detail-event/detail-event.component').then(
        (m) => m.DetailEventComponent
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./home/views/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'events',
    loadComponent: () =>
      import('./home/views/events/events.component').then(
        (m) => m.EventsComponent
      ),
  },
  {
    path: 'export',
    loadComponent: () =>
      import('./home/views/export/export.component').then(
        (m) => m.ExportComponent
      ),
  },
  {
    path: 'scan',
    loadComponent: () =>
      import('./home/views/scan/scan.component').then((m) => m.ScanComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
