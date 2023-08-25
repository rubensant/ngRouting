import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PagingModule } from './modules/paging/paging.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from './modules/buttons/buttons.module';
import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RandomContactPageComponent } from './components/random-contact-page/random-contact-page.component';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { KabanTasksComponent } from './components/kaban-tasks/kaban-tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { ExampleAnimationComponent } from './components/example-animation/example-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    LoginFormComponent,
    NombreCompletoPipe,
    RandomUserComponent,
    RandomContactPageComponent,
    NavComponent,
    DashboardComponent,
    FullNamePipe,
    TasksPageComponent,
    KabanTasksComponent,
    ExampleAnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagingModule,
    FormsModule,
    // reactive forms
    ReactiveFormsModule,
    // custom module to material components import
    MaterialModule,
    ButtonsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
