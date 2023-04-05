// Import necessary modules and components from Angular core
import { Component, Input, OnInit } from '@angular/core';

// Define the component using the @Component decorator
@Component({
  // Selector to use this component in HTML
  selector: 'app-star-rating',
  // The HTML template file for this component
  templateUrl: './star-rating.component.html',
  // The CSS stylesheet for this component
  styleUrls: ['./star-rating.component.scss'],
})

// Export the StarRatingComponent class to use in other files
export class StarRatingComponent implements OnInit {
  // Define two input properties for this component
  @Input() rating: any; // Value of the rating
  @Input() isReadOnly: boolean = false; // Flag to set readonly mode

  // Constructor function for the StarRatingComponent class
  constructor() {}

  // Lifecycle hook function called after component initialization
  ngOnInit(): void {}
}
