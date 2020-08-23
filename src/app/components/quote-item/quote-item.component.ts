import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Quote } from 'src/app/models/Quote';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
  @Input () quote:Quote;
  @Output () deleteQuote: EventEmitter<Quote> = new EventEmitter ();

  numberOfVotes: number =0;

  upVoteClick(){
    this.numberOfVotes++;
  }
  downVoteClick(){
    this.numberOfVotes--;
  }

  constructor() { }


  ngOnInit(): void {
  }
  onDelete (quote){
    this.deleteQuote.emit(quote);
    
   }

}


