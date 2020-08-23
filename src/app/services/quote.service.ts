import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { Quote } from '../models/Quote';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quotesUrl: string='http://localhost:3000/posts';
  quotesLimit = '?_limit=5'

  constructor(private http: HttpClient) { }

  getQuotes():Observable<Quote[]>{
    return this.http.get<Quote[]>(`${this.quotesUrl}${this.quotesLimit}`);
  }

  //Add Quote
  addQuote(quote:Quote): Observable<Quote>{
     return this.http.post<Quote>(this.quotesUrl,quote,httpOptions);
  }
}
