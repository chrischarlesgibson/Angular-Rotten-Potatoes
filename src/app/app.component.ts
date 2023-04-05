import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // The name of the component's HTML tag that can be used to embed it in other components.
  templateUrl: './app.component.html', // The path to the component's HTML template file.
  styleUrls: ['./app.component.scss'], // The path to the component's CSS style file.
})
export class AppComponent {
  title = 'rotten-potatoes'; // The value of the 'title' property that is used in the component's template.
}
