import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDto } from '../types/move';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'f412fcdc374f38cc4d3df630ea8d20be';
  constructor(private http: HttpClient) {}

  getMoviesByType(type: string) {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`,
    );
  }
}
