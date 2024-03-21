import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books = [
    { id: 1, name: 'Book 1', authors: ['Author 1'], isbn: '1234567890' },
    { id: 2, name: 'Book 2', authors: ['Author 2'], isbn: '0987654321' }
  ];
  constructor() { }
  getBooks() {
    return this.books;
  }
}
