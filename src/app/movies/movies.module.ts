import { NavbarComponent } from './navbar/navbar.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { BannerComponent } from './banner/banner.component';
import { MoviesComponent } from './movies.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ChartModule } from 'primeng/chart';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MovieTypeComponent,
    MoviesComponent,
    BannerComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    YouTubePlayerModule,
    ChartModule,
    MatButtonModule
  ],
  exports: []

})
export class MoviesModule { }
