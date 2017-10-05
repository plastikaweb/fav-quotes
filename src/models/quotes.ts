export interface Quote {
  id: string;
  person: string;
  text: string;
}

export interface QuotesCollectionItem {
  category: string;
  quotes: Quote[];
  icon: string;
}
