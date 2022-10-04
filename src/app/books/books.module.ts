
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books.component';
import { SharedModule } from '../shared/shared.module';



const routes = [
  { path: '', component: BooksComponent },
  { path: 'books/add', component: AddbookComponent },
  { path: 'books/edit', component: EditComponent }
]


@NgModule({
  declarations: [
    AddbookComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [RouterModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooksModule { }
