import { Component } from '@angular/core';
import {MoviesService} from "../service/movies.service";
import {MovieFilters} from "../model/movie-filters.model";
import {Subject} from "rxjs";
import {Movie} from "../model/movie.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movieFilters: MovieFilters = {
    genre: 'All Movies',
    minimumRate: 0
  }

  movies$: Subject<Movie[]> = new Subject<Movie[]>();

  constructor(private moviesService: MoviesService) {
    this.moviesService.getAllMovies$()
      .subscribe(movies => {
        this.movies$.next(movies);
      })
  }

  search() {
    // TODO Implement this method
    this.moviesService.getFilteredMovies$(this.movieFilters)
      .subscribe(movies => {
        this.movies$.next(movies);
      });
  }
}
