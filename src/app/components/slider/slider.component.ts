import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('SliderComponent initialized');
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=f412fcdc374f38cc4d3df630ea8d20be',
      )
      .subscribe((data) => {
        console.log(data);
        this.movies = data;
      });
  }
}
