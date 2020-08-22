import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/Quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[];
  constructor() { }

  ngOnInit(): void {

    this.quotes = [
      {
        id: 1,
        title: 'Quote one',
        body: 'Hello world'
      },
      {
        id: 1,
        title: 'Quote two',
        body: 'Hello kenya'
      },
      {
        id: 1,
        title: 'Quote three',
        body: 'Hello nairobi'
      }
    ]
  }

}
