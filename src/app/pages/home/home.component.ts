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
    console.log('HomeComponent initialized');
  }
  upComingMovies$ = this.moviesService.getUpcomingMovies();
  topRatedMovies$ = this.moviesService.getTopRatedMovies();
  constructor(private moviesService: MoviesService) {}
}
