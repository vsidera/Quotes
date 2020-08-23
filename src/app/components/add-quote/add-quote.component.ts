import { Component, OnInit ,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

       @Output() addQuote: EventEmitter<any> = new EventEmitter();

  title: string;
  id: string;
  body: string;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const quote ={
      title: this.title,
      body: this.body

    }
     this.addQuote.emit(quote);

  }

}
