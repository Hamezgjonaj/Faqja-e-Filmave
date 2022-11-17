import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../models/imovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = 'https://api.themoviedb.org/3';
  //if server down uncomment line 13 and comment line 11
  //baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getMovies(url: any): Observable<IMovie> {
    console.log(this.baseUrl)
    console.log(url)
    return this.http.get<IMovie>(this.baseUrl + url)


    //if server down uncomment line 20 and comment line 18
    //return this.http.get<IMovie>(this.baseUrl)
  }
}
