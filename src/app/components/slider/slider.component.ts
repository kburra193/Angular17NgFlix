import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  constructor(private moviesService: MoviesService) {}
  movies$ = this.moviesService.getPopularMovies(); //we are using observable here async pipe in html

  slideIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.slideIndex += 1;
    }, 5000);
  }
}
