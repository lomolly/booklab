import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrarydataService } from 'src/app/shared/librarydata.service';
import { Book } from 'src/app/shared/models/Book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  formData : FormGroup | any;
  submitted = false;
  model : Book;
  bookList = JSON.parse(localStorage.getItem('booklist'));

  constructor(public fb : FormBuilder, private liberaryService : LibrarydataService) { }

  get f() { return this.formData.controls; }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formData = this.fb.group({
      title : ['', [Validators.required]],
      author: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formData);
    if(this.formData.invalid) {
      return;
    }

    this.model = Object.assign({}, this.formData.value);
    this.model.id = this.bookList.length + 1;
    this.model.img = '../../assets/books/img1.jpeg';
    this.liberaryService.addBook(this.model);
  }

}
