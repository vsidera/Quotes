import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuoteItemComponent } from './components/quote-item/quote-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { AboutComponent } from './components/pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteItemComponent,
    HeaderComponent,
    AddQuoteComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
