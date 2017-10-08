import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  author: string;
  text: string;

  constructor(private viewController: ViewController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.author = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  close(remove = false) {
    this.viewController.dismiss(remove);
  }
}
