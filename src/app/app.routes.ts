import { RouterModule, Routes } from '@angular/router';

import { Component } from './components/pages/xx/xx.component';

const ROUTES: Routes = [
  { path: 'xxx', component: Component },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
];
