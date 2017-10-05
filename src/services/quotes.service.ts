import { Quote } from '../models/quotes';

export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFav(quote: Quote) {
    this.favoriteQuotes.push(quote);
  }

  removeQuoteFromFav(quote: Quote) {
    this.favoriteQuotes = this.favoriteQuotes.filter(q => q.id !== quote.id);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }
}
