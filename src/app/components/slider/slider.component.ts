import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { imagesBaseUrl, imageSize } from '../../constants/images-size';
import { Movie } from '../../types/movie';
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
  @Input() slides: Movie[] = [];
  @Input() isHeader = false;
  constructor() {}

  slideIndex = 0;
  imagesBaseUrl = imagesBaseUrl;
  imageSize = imageSize;

  ngOnInit() {
    console.log('Slider Component initialized');
    if (!this.isHeader) {
      this.changeSlide();
    }
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 10) {
        this.slideIndex = 0;
      }
    }, 5000);
  }
}
