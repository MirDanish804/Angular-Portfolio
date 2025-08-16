import { Routes } from '@angular/router';
import { Project } from './project/project';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },          // Home page
  { path: 'project', component: Project } // Project page
];
