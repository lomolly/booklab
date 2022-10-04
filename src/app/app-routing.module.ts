import { FavoritesComponent } from './favorites/favorites.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { BooksModule } from './books/books.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
