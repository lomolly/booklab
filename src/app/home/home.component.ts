import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bookList = JSON.parse(localStorage.getItem('booklist'));
  favoriteList = JSON.parse(localStorage.getItem('favlist'));
  allFav = [];
  favList = [];

  constructor() { }

  ngOnInit(): void {
    console.log('Favorite list',this.favoriteList);
  }

  AddToFav(selected){
    console.log('selected',selected);
    this.allFav = this.favoriteList;
    if(this.favoriteList !== null || this.favoriteList !== undefined ){
      this.favoriteList.push({selected});
      console.log('all fave after' , this.allFav)
      localStorage.setItem('favlist', JSON.stringify(this.favoriteList));
    }
    else if(this.favoriteList == null || this.favoriteList == undefined){
     this.allFav.push(selected);
     localStorage.setItem('favlist', JSON.stringify(this.allFav));
     console.log('all fave' , this.allFav)
      
    }
   
  }

}
