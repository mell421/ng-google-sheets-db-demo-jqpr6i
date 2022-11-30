import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: API_KEY,
      useValue: environment.googleSheetsApiKey,
    },
    GoogleSheetsDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
