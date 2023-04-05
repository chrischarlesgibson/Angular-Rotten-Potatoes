// Import required modules and services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  // Define component metadata
  //Specifies the name of the component when it is used as a directive in an HTML template. In this case, the selector is app-header.
  selector: 'app-login',
  //Specifies the location of the HTML file that defines the component's view. In this case, the header.component.html file is located in the same directory as the component file.
  templateUrl: './login.component.html',
  //Specifies an array of URLs for the stylesheets to be applied to the component's view. In this case, the header.component.scss file is located in the same directory as the component file.
  styleUrls: ['./login.component.scss'],
})

// Define the LoginComponent class
export class LoginComponent implements OnInit {
  // Define properties
  username = '';
  password = '';
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Define the login() method to handle login event
  login() {
    // Check if username and password fields are not empty
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is required';
    } else {
      // Clear error message
      this.errorMsg = '';
      // Call the login() method from the AuthService service
      let res = this.auth.login(this.username, this.password);
      // If authentication is successful, navigate to the home page
      if (res === 200) {
        this.router.navigate(['home']);
      }
      // If authentication fails, display an error message
      if (res === 403) {
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }
}
