import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component'; // Importing the StarRatingComponent
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importing the NgbModule from ng-bootstrap library

@NgModule({
  declarations: [StarRatingComponent], // Declaring the StarRatingComponent in the module
  imports: [CommonModule, NgbModule], // Importing CommonModule and NgbModule
  exports: [StarRatingComponent], // Exporting the StarRatingComponent to make it available for other modules
})
export class FeatureModule {} // Exporting the FeatureModule class
