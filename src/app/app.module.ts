import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LibraryPage } from '../pages/library/library';
import { QuotePage } from '../pages/quote/quote';
import { QuotesPage } from '../pages/quotes/quotes';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesService } from '../services/quotes.service';
import { SettingsService } from '../services/settings.service';
import { FavoritesPageModule } from '../pages/favorites/favorites.module';
import { LibraryPageModule } from '../pages/library/library.module';
import { QuotesPageModule } from '../pages/quotes/quotes.module';
import { QuotePageModule } from '../pages/quote/quote.module';
import { SettingsPageModule } from '../pages/settings/settings.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [ BrowserModule, IonicModule.forRoot(MyApp), FavoritesPageModule, LibraryPageModule, QuotesPageModule, QuotePageModule, SettingsPageModule ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
