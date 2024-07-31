import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  constructor(private moviesService: MoviesService) {}
  movies$ = this.moviesService.getPopularMovies(); //we are using observable here async pipe in html

  items = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5'];
}
