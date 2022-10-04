import { CategoriesModule } from './categories/categories.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';

import { BooksModule } from './books/books.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { CategoriesComponent } from './categories/categories.component';
import { LibrarydataService } from './shared/librarydata.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomeComponent,
    FavoritesComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CategoriesModule
  ],
  providers: [LibrarydataService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
