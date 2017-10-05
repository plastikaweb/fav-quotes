import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Quote, QuotesCollectionItem } from '../../models/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quotesItem: QuotesCollectionItem;

  constructor(private navParams: NavParams) {}

  ngOnInit() {
    this.quotesItem = this.navParams.data;
  }

  addToFavorites(quote: Quote) {

  }
}
