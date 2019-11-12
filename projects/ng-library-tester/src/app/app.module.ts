import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgLibraryToddModule } from 'ng-library-todd';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLibraryToddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
