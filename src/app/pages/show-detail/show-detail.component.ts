import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../types/movie';
import { Video } from '../../types/video';
import { Image } from '../../types/images';
import { Actor } from '../../types/credits';
import { IMAGES_SIZES } from '../../constants/images-size';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  show$: Observable<Movie> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;
  showCast$: Observable<Actor[]> | null = null;
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
      this.showVideos$ = this.moviesService.getMovieVideos(this.showId);
      this.showImages$ = this.moviesService.getMovieImages(this.showId);
      this.showCast$ = this.moviesService.getMovieCast(this.showId);
    });
    //another merthod instead of subscribing to params changes
    //this.router.snapshot.params['id'];
  }
}
