import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent; // Declare component variable
  let fixture: ComponentFixture<HeaderComponent>; // Declare fixture variable

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent], // Declare the HeaderComponent to be tested
    }).compileComponents(); // Compile the component
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent); // Create an instance of the component
    component = fixture.componentInstance; // Assign the component instance to the component variable
    fixture.detectChanges(); // Trigger change detection on the component
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Expect that the component instance exists and is truthy
  });
});
