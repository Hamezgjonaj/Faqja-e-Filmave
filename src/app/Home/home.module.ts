import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { LoginComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeRoutingModule } from './Home-routing.module';
import { RowComponent } from './row/row.component';



@NgModule({
  declarations: [HomeComponent, RowComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
