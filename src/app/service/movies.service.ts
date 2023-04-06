import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Movie} from "../model/movie.model";
import {MovieFilters} from "../model/movie-filters.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {}

  getAllMovies$(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('/api/movies');
  }

  getFilteredMovies$(movieFilters: MovieFilters): Observable<Movie[]> {
    // TODO Execute an API call. This method should filter the movies based on the genre and the rating
    return null;//TODO Remove this line
  }

  getMovie$(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>('/api/movies/' + id);
  }
}
