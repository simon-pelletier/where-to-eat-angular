import { Component, OnInit, Input } from '@angular/core';
import { LocalRestaurantsService } from '../local-restaurants.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  localRestaurants:any = [];


  constructor(private _localRestaurantsService: LocalRestaurantsService) { }

  ngOnInit() {
    this._localRestaurantsService.getRestaurants().subscribe(
      data => this.localRestaurants = data
    );
  }




}
