import { MoviesService } from '../../services/movies.service';
import { Component, Input, OnDestroy } from '@angular/core';
import * as movieTrailer from 'movie-trailer';
import { Subscription } from 'rxjs';

let apiLoaded = false;

@Component({
  selector: 'app-movie-type',
  templateUrl: './movie-type.component.html',
  styleUrls: ['./movie-type.component.scss']
})

export class MovieTypeComponent implements OnDestroy {
  @Input() title!: string;

  @Input() fetchUrl!: string;

  @Input() isLargeRow: boolean = false;
 width="100%"



  baseUrl = 'https://image.tmdb.org/t/p/original/';

  trailerUrl!: string;
  movies: any;

  subscriptions!: Subscription[];


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    let moviesubscription = this.moviesService.getMovies(this.fetchUrl).subscribe(
      (      data: { results: any; }) => {
        this.movies = data.results;
      },
      (      error: any) => {
        this.movies = null;
      }
    )

    this.subscriptions?.push(moviesubscription);


    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }



  }


  onMovieClicked(movie: any) {
    if (this.trailerUrl) {
      this.setTrailerUrl("");
    }
    else {
      this.playYoutubeTrailer(movie?.title || movie?.name || '');
    }
  }


  setTrailerUrl(url: string) {
    this.trailerUrl = url;
  }

  playYoutubeTrailer(search: any) {
    movieTrailer(search).then(
      (      result: string) => {
        this.setTrailerUrl(result.split('?v=')[1])
      }
    ).catch(
      (      error: any) => console.log(`%c${error}, '%cMovie not Found or error Occured`, "background:black ; color: white ;font-size:25px", "color: red; font-size:25px")
    )
  }


  ngOnDestroy(): void {
    this.subscriptions?.map(
      sub => sub.unsubscribe()
    )

  }

}
