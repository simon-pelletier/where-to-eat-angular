import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalRestaurantsService {

  private _url: string = "assets/data/restaurants.json"

  neLat;
  neLng;
  swLat;
  swLng;

  constructor(private _http: Http) { }

  getRestaurants(){
    return this._http.get(this._url)
      .pipe(map((response: Response) => response.json()));
  }

  public isVisible(){
    return true;
  }
}
