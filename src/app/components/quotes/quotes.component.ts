import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/Quote';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[];
  constructor(private quoteService:QuoteService) { }

  ngOnInit(): void {
      this.quoteService.getQuotes().subscribe( quotes => {
        this.quotes = quotes;
      });
  
  }
  deleteQuote (quote:Quote){
    this.quotes = this.quotes.filter(q => q.id !== quote.id);
  }

  addQuote (quote:Quote){
    this.quoteService.addQuote(quote).subscribe(quote =>{
      this.quotes.push(quote);
    }

    );
  }
}
