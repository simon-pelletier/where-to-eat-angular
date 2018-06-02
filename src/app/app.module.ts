import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCY2YSw8RU-njyTNebCy0-FlH33LleOt-4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
