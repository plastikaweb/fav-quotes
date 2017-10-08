import { Component, OnInit } from '@angular/core';
import { AlertController, IonicPage, NavParams } from 'ionic-angular';
import { Quote, QuotesCollectionItem } from '../../models/quotes';
import { QuotesService } from '../../services/quotes.service';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quotesItem: QuotesCollectionItem;

  constructor(private navParams: NavParams, private alertController: AlertController, private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quotesItem = this.navParams.data;
  }

  addToFavorites(quote: Quote) {
    const alert = this.alertController.create({
      title: 'Add quote',
      message: 'Are you sure you want to add this quote?',
      buttons: [
        {
          text: 'Add it',
          handler: () => {
            this.quotesService.addQuoteToFav(quote)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('nop');
          }
        }
      ]
    });

    alert.present();
  }

  removeFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFav(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
