import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ContentComponent } from './content/content.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ContentComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StarRatingModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCY2YSw8RU-njyTNebCy0-FlH33LleOt-4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
