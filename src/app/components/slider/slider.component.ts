import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: any;
  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('SliderComponent initialized');
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.moviesService.getPopularMovies().subscribe((data) => {
      this.movies = data;
      console.log(this.movies);
    });
  }
}
