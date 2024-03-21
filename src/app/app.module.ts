import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BookItemComponent } from './book/book-item/book-item.component';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BlogListComponent,
    BookItemComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
