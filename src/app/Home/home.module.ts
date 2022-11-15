import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { LoginComponent } from './log in system/log-in/log-in.component';
import { RegisterComponent } from './log in system/register/register.component';
import { HomeRoutingModule } from './Home-routing.module';
import { RowComponent } from './row/row.component';
import { AccordionComponentComponent } from './accordion-component/accordion-component.component';




@NgModule({
  declarations: [HomeComponent, RowComponent, LoginComponent, RegisterComponent, AccordionComponentComponent, ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
