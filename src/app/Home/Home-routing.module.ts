import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './log in system/log-in/log-in.component';
import { RegisterComponent } from './log in system/register/register.component';
import { AdminComponent } from './log in system/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
