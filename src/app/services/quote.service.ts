import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  getQuotes(){
    return [
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
