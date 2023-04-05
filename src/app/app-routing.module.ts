import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
const routes: Routes = [
  //This route matches the default path (i.e., the root URL). It redirects to the login path, which will cause the LoginComponent to be loaded.
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //This route matches the login path. When this path is navigated to, the LoginComponent will be loaded.
  {
    path: 'login',
    component: LoginComponent,
  },
  //This route matches the home path. When this path is navigated to, the HomeComponent will be loaded.
  { path: 'home', component: HomeComponent },
  //this route matches the movie path. When this path is navigated to, the MovieComponent will be loaded.
  { path: 'movie', component: MovieComponent },
  //This is a wildcard route that matches any URL that doesn't match the other routes defined in the array. It will cause the LoginComponent to be loaded for any unmatched URLs.
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
