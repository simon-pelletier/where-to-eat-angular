import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalRestaurantsService {

  private _url: string = "assets/data/restaurants.json"

  public neLat;
  public neLng;
  public swLat;
  public swLng;

  constructor(private _http: Http) { }

  getRestaurants(){
    return this._http.get(this._url)
      .pipe(map((response: Response) => response.json()));
  }

}
