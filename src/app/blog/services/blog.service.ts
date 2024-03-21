import { Injectable } from '@angular/core';
export interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  comments: string[];
}
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs: Blog[] = [
    { id: 1, title: 'Blog 1', description: 'Description 1', author: 'Author 1', comments: ['Comment 1', 'Comment 2'] },
    { id: 2, title: 'Blog 2', description: 'Description 2', author: 'Author 2', comments: ['Comment 3'] }
  ];
  constructor() { }
  getBlogs() {
    return this.blogs;
  }
}
