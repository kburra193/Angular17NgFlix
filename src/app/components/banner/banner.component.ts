import { Movie } from '../../types/movie';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() shows: Movie[] = [];
  @Input() title = '';
}
