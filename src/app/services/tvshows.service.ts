import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvshowsDto } from '../types/tvshow';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'f412fcdc374f38cc4d3df630ea8d20be';

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
}
