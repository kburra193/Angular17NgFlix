import { Component } from '@angular/core';
import { MoviesService } from './../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Home Component initialized');
  }
  upComingMovies$ = this.moviesService.getMoviesByType('upcoming');
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated');
  constructor(private moviesService: MoviesService) {}
}
