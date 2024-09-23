// license-header angular merge-point
//
/**
 * @author Generated by app-routing.module.ts.vsl in andromda-anglar-cartridge Do not modify by hand!
 *
 * MODEL CLASS:  $validationName
 */
import { Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: async () => (await import('./auth/auth.module')).AuthModule,
  },
  Shell.childRoutes([
    {
      path: '',
      data: { title: 'Home' },
      loadChildren: () => import('./home/home.routes').then((m) => m.routes),
    },
    {
      path: 'about',
      data: { title: 'About' },
      loadChildren: () => import('./about/about.routes').then((m) => m.routes),
    },
    {
      path: 'institution', 
      loadChildren: () => import('@app/view/institution/institution.routes').then((m) => m.routes),
    },
  ]),
  // Fallback when no prior route is matched
  { 
    path: '**', redirectTo: '', pathMatch: 'full' 
  },
];