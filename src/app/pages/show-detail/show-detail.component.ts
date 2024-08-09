import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = 0;
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    //observe the route params and subscribe to params changes
    this.router.params.subscribe((params) => {
      console.log(params);
      this.showId = params['id'];
    });
    //another merthod instead of subscribing to params changes
    //this.router.snapshot.params['id'];
  }
}
