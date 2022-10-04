import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrarydataService } from 'src/app/shared/librarydata.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  formData : FormGroup | any;
  submitted = false;

  edit = JSON.parse(localStorage.getItem('editcategory'));
  categoryList = JSON.parse(localStorage.getItem('categorylist'));

  constructor(public fb : FormBuilder, private libService : LibrarydataService) { }

  get f() { return this.formData.controls; }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.formData = this.fb.group({
      id : [this.edit.id],
      name : [this.edit.name, [Validators.required]],
    })
  }

    onSubmit() {
      this.submitted = true;
      console.log(this.formData);
      if(this.formData.invalid) {
        return;
      } 
      this.libService.editCategory(this.formData.value);

    }
  }