import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrarydataService } from 'src/app/shared/librarydata.service';
import { Category } from './../../shared/models/Category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  formData : FormGroup | any;
  submitted = false;
  list : any;
  model : Category = new Category;
  categoryList = JSON.parse(localStorage.getItem('categorylist'));

  constructor(public fb : FormBuilder, private liberaryService : LibrarydataService) { }

  get f() { return this.formData.controls; }

  ngOnInit(): void {
    this.getAllCategories();
    this.initializeForm();
  }

  initializeForm() {
    this.formData = this.fb.group({
      name : ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.formData);
    if(this.formData.invalid) {
      return;
    }
    this.model = Object.assign({}, this.formData.value);
    this.model.id = this.categoryList.length + 1;
    this.liberaryService.addCategory(this.model);
  }

  getAllCategories (){
    this.list = this.liberaryService.getCategory();
  }

}

