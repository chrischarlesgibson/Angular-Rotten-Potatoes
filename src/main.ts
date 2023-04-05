// Importing Angular core and platformBrowserDynamic
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importing the main AppModule and environment configuration file
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Checking if the app is running in production mode and enabling production mode if it is.
if (environment.production) {
  enableProdMode();
}

// Bootstraping the AppModule using platformBrowserDynamic
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
