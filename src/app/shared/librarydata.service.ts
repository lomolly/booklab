import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibrarydataService {

  categoryList = JSON.parse(localStorage.getItem('categorylist'));
  bookList = JSON.parse(localStorage.getItem('booklist'));
  catList = [];
  books = [];

  constructor(public route : Router) { }

  getBooks(){

    let array = [
      {id: 1, title: 'Forbidden Passion', author : 'Jane Blue', category: 'Romance', img: '../../assets/books/img1.jpeg'},
      {id: 2, title: 'Black Widow', author : 'Clark Dove', category: 'Friction', img: '../../assets/books/img2.jpeg'},
      {id: 3, title: 'Yellow Child', author : 'Todd Fed', category: 'Drama', img: '../../assets/books/img3.jpeg'},
      {id: 4, title: 'Country & Laws', author : 'Frank Black', category: 'History', img: '../../assets/books/img4.jpeg'}
    ]
    localStorage.setItem('booklist', JSON.stringify(array));

    return [
      {id: 1, title: 'Forbidden Passion', author : 'Jane Blue', category: 'Romance', img: '../../assets/books/img1.jpeg'},
      {id: 2, title: 'Black Widow', author : 'Clark Dove', category: 'Friction', img: '../../assets/books/img2.jpeg'},
      {id: 3, title: 'Yellow Child', author : 'Todd Fed', category: 'Drama', img: '../../assets/books/img3.jpeg'},
      {id: 4, title: 'Country & Laws', author : 'Frank Black', category: 'History', img: '../../assets/books/img4.jpeg'}
    ]
  
  }

  getCategory(){
    let array = [
      { id: 1, name: 'Drama' },
      { id: 2, name: 'Friction' },
      { id: 3, name: 'History' },
      { id: 4, name: 'Romance' }
  ]
  localStorage.setItem('categorylist', JSON.stringify(array));
    return [
          { id: 1, name: 'Drama' },
          { id: 2, name: 'Friction' },
          { id: 3, name: 'History' },
          { id: 4, name: 'Romance' }
      ]
  }

  // Add Category 
  addCategory(model: any){
    this.catList = this.categoryList;
    this.catList.push(model);
    localStorage.setItem('categorylist', JSON.stringify(this.catList));
    this.route.navigateByUrl('/categories');
  }

  // Edit Category
  editCategory(model : any){
    this.catList = this.categoryList;
    for (let i =0; i < this.catList.length; i++){
      if(this.catList[i].id === model.id){
        this.catList[i].name = model.name;
        localStorage.setItem('categorylist', JSON.stringify(this.catList));
        this.route.navigateByUrl('/categories');
      }
    }
  }

  // Delete Category
  deleteCategory(id : number){
    this.catList = this.categoryList;
    let remove;
    remove = this.catList.indexOf(id)
    this.catList.splice(remove, 1);
    localStorage.setItem('categorylist', JSON.stringify(this.catList));
    this.route.navigateByUrl('/categories');
  }

  // Add Book
  addBook(model: any){
    this.books = this.bookList;
    this.books.push(model);
    localStorage.setItem('booklist', JSON.stringify(this.books));
    this.route.navigateByUrl('/books');
  }

   // Edit Book
   editBook(model : any){
    this.books = this.bookList;
    for (let i =0; i < this.books.length; i++){
      if(this.books[i].id === model.id){
        this.books[i] = model;
        localStorage.setItem('booklist', JSON.stringify(this.books));
        this.route.navigateByUrl('/books');
      }
    }
  }

  // Delete Book
  deleteBook(id : number){
    this.books = this.bookList;
    let remove;
    remove =  this.books.indexOf(id)
    this.books.splice(remove, 1);
    localStorage.setItem('booklist', JSON.stringify(this.books));
    window.location.reload();
  }
}
