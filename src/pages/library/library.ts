import { QuotesCollectionItem } from '../../models/quotes';
import { Component, OnInit } from '@angular/core';

import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

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
