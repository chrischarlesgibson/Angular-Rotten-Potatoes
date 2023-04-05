import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [
    // The declarations array lists all of the components, directives, and pipes that belong to this module.
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovieComponent,
    HeaderComponent,
  ],
  imports: [
    // The imports array lists all of the modules that this module depends on.
    BrowserModule, // Required to run the app in a browser
    AppRoutingModule, // This is the custom routing module for the app
    FormsModule, // Required to use two-way data binding in the app
    HttpClientModule, // Required to make HTTP requests
    FeatureModule, // This is a custom feature module that this app module depends on
  ],
  providers: [],
  bootstrap: [AppComponent], // This specifies the root component that Angular should bootstrap when it starts the app
})
export class AppModule {}
