import { Component, OnInit, Input } from '@angular/core';
import { LocalRestaurantsService } from '../local-restaurants.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  localRestaurants:any = [];

  restaurantClicked;

  ratingMin:number = 1;
  ratingMax:number = 5;

  constructor(private _localRestaurantsService: LocalRestaurantsService) { }

  ngOnInit() {
    this._localRestaurantsService.getRestaurants().subscribe(
      data => this.localRestaurants = data
    );
  }

  public restaurantExtend(event, id){
    if (this.restaurantClicked == id){
    } else {
      this.restaurantClicked = id;
    }
  }

  public selectedRestaurant(id){
    if (this.restaurantClicked == id){
      return true;
    } else {
      return false;
    }
  }

  public ratingAverage(id){
    var average = 0;

    for (let i = 0; i < this.localRestaurants[id].ratings.length; i++){
      average = average + this.localRestaurants[id].ratings[i].stars;
    }
    average = average / this.localRestaurants[id].ratings.length;
    return average;
  }

  public filteredRestaurant(id){
    var average = this.ratingAverage(id);
    if (average >= this.ratingMin && average <= this.ratingMax){
      return true;
    } else {
      return false;
    }
  }

  public onRatingChangeMin(e){
    if (this.ratingMax >= e.rating){
      this.ratingMin = e.rating;
    } else {
      this.ratingMin = e.rating;
      this.ratingMax = e.rating;
    }
  }
  public onRatingChangeMax(e){
    if (this.ratingMin <= e.rating){
      this.ratingMax = e.rating;
    } else {
      this.ratingMax = e.rating;
      this.ratingMin = e.rating;
    }
  }

  public isVisible(i){
    if (
      this.localRestaurants[i].lat < this._localRestaurantsService.neLat
      && this.localRestaurants[i].lat > this._localRestaurantsService.swLat
      && this.localRestaurants[i].long < this._localRestaurantsService.neLng
      && this.localRestaurants[i].long > this._localRestaurantsService.swLng
    ){
      return true;
    } else {
      return false;
    }
  }

}
