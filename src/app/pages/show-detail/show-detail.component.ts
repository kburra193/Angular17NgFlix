import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../types/movie';
import { IMAGES_SIZES } from '../../constants/images-size';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  show$: Observable<Movie> | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,
  ) {}
  ngOnInit() {
    //observe the route params and subscribe to params changes
    this.router.params.subscribe((params) => {
      console.log(params);
      this.showId = params['id'];
      this.show$ = this.moviesService.getMovieById(this.showId);
    });
    //another merthod instead of subscribing to params changes
    //this.router.snapshot.params['id'];
  }
}
