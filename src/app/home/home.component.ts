// Import required Angular libraries
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Declare Component metadata
@Component({
  //Specifies the name of the component when it is used as a directive in an HTML template. In this case, the selector is app-header.
  selector: 'app-home',
  //Specifies the location of the HTML file that defines the component's view. In this case, the header.component.html file is located in the same directory as the component file.
  templateUrl: './home.component.html',
  //Specifies an array of URLs for the stylesheets to be applied to the component's view. In this case, the header.component.scss file is located in the same directory as the component file.
  styleUrls: ['./home.component.scss'],
})

// Export the HomeComponent class
export class HomeComponent implements OnInit {
  // Declare class properties
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  // Inject required services
  constructor(private http: HttpClient, private router: Router) {}

  // Lifecycle hook that runs after the Component is initialized
  ngOnInit(): void {
    // Call methods to fetch movie data from API
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  // Method to fetch trending movies data from API
  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe((movies) => {
        // Store fetched movie data to trendingMovies property
        this.trendingMovies = movies;
      });
  }

  // Method to fetch theatre movies data from API
  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe((movies) => {
        // Store fetched movie data to theatreMovies property
        this.theatreMovies = movies;
      });
  }

  // Method to fetch popular movies data from API
  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies) => {
        // Store fetched movie data to popularMovies property
        this.popularMovies = movies;
      });
  }

  // Method to navigate to the movie details page
  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
