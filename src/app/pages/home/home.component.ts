import { Component } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { TvshowsService } from './../../services/tvshows.service';
import { map } from 'rxjs';
import { mapToMovies } from '../../types/tvshow';

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
  upComingMovies$ = this.moviesService.getMoviesByType('upcoming', 12);
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12);
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies));

  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService,
  ) {}
}
