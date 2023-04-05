// import necessary modules
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Component decorator
@Component({
  //Specifies the name of the component when it is used as a directive in an HTML template. In this case, the selector is app-header.
  selector: 'app-movie',
  //Specifies the location of the HTML file that defines the component's view. In this case, the header.component.html file is located in the same directory as the component file.
  templateUrl: './movie.component.html',
  //Specifies an array of URLs for the stylesheets to be applied to the component's view. In this case, the header.component.scss file is located in the same directory as the component file.
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  // define class properties
  type = '';
  id = '';
  url = '';
  movies: any;
  movie: any;

  // inject ActivatedRoute and HttpClient into constructor
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  // lifecycle hook that runs on component initialization
  ngOnInit(): void {
    // get route parameters
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    // determine URL based on route parameter
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }

    // call getMovie method to retrieve movie data
    this.getMovie();
  }

  // method to retrieve movie data from JSON file
  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      // store retrieved movies in class property
      this.movies = movies;

      // find the index of the movie that matches the ID parameter
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );

      // if a matching movie is found, store it in a class property
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }
}
