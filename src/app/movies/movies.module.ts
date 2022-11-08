import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { MovieTypeComponent } from './movie-type/movie-type.component';
import { BannerComponent } from './banner/banner.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    MoviesComponent,
    NavbarComponent,
    MovieTypeComponent,
    BannerComponent
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  imports: [
    CommonModule,
    YouTubePlayerModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
