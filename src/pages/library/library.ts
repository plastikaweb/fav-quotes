import { QuotesCollectionItem } from '../../models/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  quotesCollection: QuotesCollectionItem[];
  quotesPage = QuotesPage;

  ngOnInit() {
    this.quotesCollection = quotes;
  }
}
