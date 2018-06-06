import { Component, OnInit } from '@angular/core';
import { LocalRestaurantsService } from '../local-restaurants.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private _localRestaurantsService: LocalRestaurantsService) { }

  localRestaurants:any = [];


  ngOnInit() {
    // Geo Location
    this.findMe()

    this._localRestaurantsService.getRestaurants().subscribe(
      data => this.localRestaurants = data
    );
  }

  boundsChange(latLngBounds) {
    this._localRestaurantsService.neLat = latLngBounds.getNorthEast().lat();
    this._localRestaurantsService.neLng = latLngBounds.getNorthEast().lng();
    this._localRestaurantsService.swLat = latLngBounds.getSouthWest().lat();
    this._localRestaurantsService.swLng = latLngBounds.getSouthWest().lng();
  }

  // Paris Coords
  lat: number = 48.855314;
  lng: number = 2.345883;
  locationFound = false;

  locationChosen = false;
  selectedLocationLat:number;
  selectedLocationLng:number;


  public iconUrl = 'assets/images/marker.svg';

  private onChoseLocation(event){
    //console.log(event.coords.lat);
    //console.log(event.coords.lng);

    this.selectedLocationLat = event.coords.lat;
    this.selectedLocationLng = event.coords.lng;
    this._localRestaurantsService.newRestaurant(event);
    this.locationChosen = true;
  }

  private findMe(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.locationFound = true;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
