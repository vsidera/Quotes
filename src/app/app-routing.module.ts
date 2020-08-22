import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './components/quotes/quotes.component';
import { AboutComponent } from './components/pages/about/about.component';


const routes: Routes = [
  {
    path: '', component: QuotesComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
