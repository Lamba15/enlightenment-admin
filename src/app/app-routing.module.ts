import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component'
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  { path: '', component: BooksComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
