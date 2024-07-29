import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getPopularMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=f412fcdc374f38cc4d3df630ea8d20be',
    );
  }
}
