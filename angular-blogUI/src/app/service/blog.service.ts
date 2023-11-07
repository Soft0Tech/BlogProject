import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BLOG_URLS } from '../share/urls.const';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getAllPost(){
    return this.http.get(BLOG_URLS.ALL_BLOG)
  }
}
