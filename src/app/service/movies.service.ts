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

  getFilteredMovies$(movieFilters: MovieFilters) {
    // TODO Fix this API call. The method getFilteredMovies$ should filter the movies based on the genre
    let apiResult$: Observable<Movie[]>;
    if (movieFilters.genre === 'All Movies') {
      apiResult$ = this.getAllMovies$();
    } else {
      apiResult$ = this.httpClient.get<Movie[]>('/api/movies', {
        params: {
          genre: movieFilters.genre
        }
      });
    }
    return apiResult$.pipe(
      map(results => results.filter(movie => movie.rating >= movieFilters.minimumRate))
    );
  }

  getMovie$(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>('/api/movies/' + id);
  }
}
