// import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  //Specifies the name of the component when it is used as a directive in an HTML template. In this case, the selector is app-header.
  selector: 'app-header',
  //Specifies the location of the HTML file that defines the component's view. In this case, the header.component.html file is located in the same directory as the component file.
  templateUrl: './header.component.html',
  //Specifies an array of URLs for the stylesheets to be applied to the component's view. In this case, the header.component.scss file is located in the same directory as the component file.
  styleUrls: ['./header.component.scss'],
})
// define the HeaderComponent class
export class HeaderComponent implements OnInit {
  // define variables to be used in the component
  constructor(private router: Router, private auth: AuthService) {}

  // define lifecycle hook
  ngOnInit(): void {}

  // function to navigate to home page
  goToHome() {
    this.router.navigate(['home']);
  }

  // function to log out the user
  logout() {
    this.auth.logout();
  }
}
