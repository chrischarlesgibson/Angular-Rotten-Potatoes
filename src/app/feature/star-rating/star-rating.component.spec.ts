// Importing necessary modules and components for testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarRatingComponent } from './star-rating.component';

// Describing the component being tested
describe('StarRatingComponent', () => {
  // Initializing component and fixture variables
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  // Setting up the testing environment asynchronously
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarRatingComponent], // Declaring the component being tested
    }).compileComponents(); // Compiling the component
  });

  // Setting up the testing environment
  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingComponent); // Creating the fixture for the component
    component = fixture.componentInstance; // Getting the instance of the component
    fixture.detectChanges(); // Detecting changes to the component
  });

  // Testing that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Expecting the component to be truthy (i.e., not null or undefined)
  });
});
