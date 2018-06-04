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
  neLat;
  neLng;
  swLat;
  swLng;

  ngOnInit() {
    // Geo Location
    this.findMe()

    this._localRestaurantsService.getRestaurants().subscribe(
      data => this.localRestaurants = data
    );
  }

  boundsChange(latLngBounds: LatLngBounds): void {
    //console.log('bounds changed ' + latLngBounds);
    this.neLat = latLngBounds.getNorthEast().lat();
    this.neLng = latLngBounds.getNorthEast().lng();
    this.swLat = latLngBounds.getSouthWest().lat();
    this.swLng = latLngBounds.getSouthWest().lng();
  }

  // Paris Coords
  lat: number = 48.855314;
  lng: number = 2.345883;
  locationFound = false;




  public iconUrl = 'assets/img/marker.svg';

  /*onChoseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    //this.locationChosen = true;
  }*/

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

  private isVisible(i){

    if (this.localRestaurants[i].lat < this.neLat && this.localRestaurants[i].lat > this.neLng){
      //console.log('oooo');
      return true;
    } else {
      console.log('NOP');
      return false;
    }

    /*if(this.getBounds().contains(marker.getPosition())){
      return true;
    } else {
      return false;
    }*/

  }

}
