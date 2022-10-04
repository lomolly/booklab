import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarydataService } from '../shared/librarydata.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private libraryService : LibrarydataService, private router : Router) { }

  bookList = JSON.parse(localStorage.getItem('booklist'));

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.libraryService.getBooks();
  }

  editBook(selected : any){
    console.log(selected);
    localStorage.setItem('editbook', JSON.stringify(selected));
    this.router.navigateByUrl('books/edit');
  }

  deleteBook(selected : any){
    console.log('selected',selected);
    this.libraryService.deleteBook(selected.id);
  }

}
