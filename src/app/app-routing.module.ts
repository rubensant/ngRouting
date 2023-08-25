import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { authGuard } from './guards/auth.guard';
import { RandomContactPageComponent } from './components/random-contact-page/random-contact-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: HomePageComponent,
        canActivate: [authGuard],
      },
      {
        path: 'tasks',
        component: TasksPageComponent,
        canActivate: [authGuard],
      },
      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [authGuard],
      },
      {
        path: 'random-contacts',
        component: RandomContactPageComponent,
        canActivate: [authGuard],
      },
      {
        path: 'contacts/:id',
        component: ContactDetailPageComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },

  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
