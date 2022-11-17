import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home.component';
import { LoginComponent } from './log in system/log-in/log-in.component';
import { RegisterComponent } from './log in system/register/register.component';
import { HomeRoutingModule } from './Home-routing.module';
import { RowComponent } from './row/row.component';
import { AccordionComponentComponent } from './accordion-component/accordion-component.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './chart/chart.component';
import { AdminPanelComponent } from './log in system/admin-panel/admin-panel.component';

@NgModule({
  declarations: [HomeComponent, RowComponent, LoginComponent, RegisterComponent, AccordionComponentComponent, ProfilComponent, ChartComponent, AdminPanelComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ChartModule,
  ]
})

export class HomeModule { }
