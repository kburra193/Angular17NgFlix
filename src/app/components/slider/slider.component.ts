import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state(
        'void',
        style({
          opacity: 0,
        }),
      ),
      transition('void<=> *', [animate('1s')]),
    ]),
  ],
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
