import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../models/imovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

baseUrl = 'https://api.themoviedb.org/3';

   constructor(private http: HttpClient) { }

  getMovies(url:any): Observable<IMovie> {
    return this.http.get<IMovie>(this.baseUrl + url)
  }
}
