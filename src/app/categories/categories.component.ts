import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarydataService } from '../shared/librarydata.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories : any;
  categoryList = JSON.parse(localStorage.getItem('categorylist'));
  
  constructor(private data : LibrarydataService, private router : Router) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.categories = this.data.getCategory();
  }

  editCategory(selected : any){
    console.log(selected);
    localStorage.setItem('editcategory', JSON.stringify(selected));
    this.router.navigateByUrl('categories/edit');
  }

  deleteCategory(selected : any){
    console.log('selected',selected);
    this.data.deleteCategory(selected.id)
  }

}
