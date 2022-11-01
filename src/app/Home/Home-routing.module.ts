import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Login'
  }


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomeRoutingModule { }
