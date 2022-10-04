import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoriteList = JSON.parse(localStorage.getItem('favlist'));

  constructor() { }

  ngOnInit(): void {
  }

}
