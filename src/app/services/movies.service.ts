import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/move';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getPopularMovies() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.http.get<MovieDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=f412fcdc374f38cc4d3df630ea8d20be',
    );
  }
}
