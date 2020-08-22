import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quote } from '../models/Quote';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quotesUrl: string='https://jsonplaceholder.typicode.com/posts';
  quotesLimit = '?_limit=5'

  constructor(private http: HttpClient) { }

  getQuotes():Observable<Quote[]>{
    return this.http.get<Quote[]>(`${this.quotesUrl}${this.quotesLimit}`);
  }
}
