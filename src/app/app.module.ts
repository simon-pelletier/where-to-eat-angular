import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ContentComponent } from './content/content.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ContentComponent,
    RestaurantComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCY2YSw8RU-njyTNebCy0-FlH33LleOt-4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
