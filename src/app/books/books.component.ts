import { Component, OnInit } from '@angular/core';
import {Book} from "../models/Book";
import { BookService } from "../services/book.service";
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  displayedColumns: string[] = ['id', 'name', 'author', 'description', 'price', 'imageUrl', 'stock', 'dateCreated', 'visits',];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(res => {
      this.books = res;
    });
  }

}
