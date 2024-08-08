import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  upComingMovies$ = this.moviesService.getUpcomingMovies();
  constructor(private moviesService: MoviesService) {}
}
