// license-header angular merge-point
//
/**
 * @author Generated by app-routing.module.ts.vsl in andromda-anglar-cartridge Do not modify by hand!
 *
 * MODEL CLASS:  $validationName
 */
import { Routes } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
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
    {
      path: 'curriculum', 
      loadChildren: () => import('@app/view/curriculum/curriculum.routes').then((m) => m.routes),
    },
    {
      path: 'curriculum/level', 
      loadChildren: () => import('@app/view/curriculum/level/curriculum-level.routes').then((m) => m.routes),
    },
    {
      path: 'curriculum/outcome', 
      loadChildren: () => import('@app/view/curriculum/outcome/exit-level-outcome.routes').then((m) => m.routes),
    },
    {
      path: 'curriculum/domain', 
      loadChildren: () => import('@app/view/curriculum/domain/domain.routes').then((m) => m.routes),
    },
    {
      path: 'curriculum/field', 
      loadChildren: () => import('@app/view/curriculum/field/learning-field.routes').then((m) => m.routes),
    },
  ]),
  // Fallback when no prior route is matched
  { 
    path: '**', redirectTo: '', pathMatch: 'full' 
  },
];
