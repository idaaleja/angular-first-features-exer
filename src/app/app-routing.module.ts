import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { ProfileComponent } from './user/profile/profile.component';


const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'blogs', component: BlogListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // Redirect to books by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
