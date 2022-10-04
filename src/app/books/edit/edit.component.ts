import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrarydataService } from 'src/app/shared/librarydata.service';
import { Book } from 'src/app/shared/models/Book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formData : FormGroup | any;
  submitted = false;
  edit = JSON.parse(localStorage.getItem('editbook'));
  bookList = JSON.parse(localStorage.getItem('booklist'));
  model : Book;

  constructor(public fb : FormBuilder, private libraryService : LibrarydataService) { }

  get f() { return this.formData.controls; }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formData = this.fb.group({
      title : [this.edit.title, [Validators.required]],
      author: [this.edit.author, Validators.required],
      category: [this.edit.category, Validators.required]
    })
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.formData);
    if(this.formData.invalid) {
      return;
    }

    this.model = Object.assign({}, this.formData.value);
    this.model.id = this.edit.id;
    this.model.img = this.edit.img;
    this.libraryService.editBook(this.model);
  }

}
 