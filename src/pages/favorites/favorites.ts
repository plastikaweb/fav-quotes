import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { Quote } from '../../models/quotes';
import { QuotesService } from '../../services/quotes.service';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService, private modalController: ModalController, private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  viewQuote(quote: Quote) {
    const modal = this.modalController.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.removeFromFavorites(quote);
      }
    });
  }

  removeFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFav(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  changeBg() {
    return this.settingsService.isAltBackground();
  }
}
