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
    {
      path: 'module', 
      loadChildren: () => import('@app/view/module/module.routes').then((m) => m.routes),
    },
    {
      path: 'module/outcome', 
      loadChildren: () => import('@app/view/module/outcome/leaning-outcome.routes').then((m) => m.routes),
    },
    {
      path: 'module/topic', 
      loadChildren: () => import('@app/view/module/topic/topic.routes').then((m) => m.routes),
    },
    {
      path: 'programme', 
      loadChildren: () => import('@app/view/programme/programme.routes').then((m) => m.routes),
    },
    {
      path: 'organisation', 
      loadChildren: () => import('@app/view/organisation/organisation.routes').then((m) => m.routes),
    },
    {
      path: 'user', 
      loadChildren: () => import('@app/view/user/user.routes').then((m) => m.routes),
    },
    {
      path: 'access', 
      loadChildren: () => import('@app/view/access/access-point.routes').then((m) => m.routes),
    },
    {
      path: 'access/type', 
      loadChildren: () => import('@app/view/access/type/access-point-type.routes').then((m) => m.routes),
    },
    {
      path: 'authorisation', 
      loadChildren: () => import('@app/view/authorisation/authorisation.routes').then((m) => m.routes),
    },
  ]),
  // Fallback when no prior route is matched
  { 
    path: '**', redirectTo: '', pathMatch: 'full' 
  },
];
