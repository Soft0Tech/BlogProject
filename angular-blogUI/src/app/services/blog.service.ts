import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BLOG_URLS } from '../share/urls.const';
@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor(private http: HttpClient) { }
    getBlog() {
        return this.http.get<any>(BLOG_URLS.ALL_BLOG)
    }
    getBlogById(id:any) {
        return this.http.get<any>(BLOG_URLS.ALL_BLOG+"/"+id)
    }
    // getBlogByCategory() {
    //     return this.http.get<any>("assets/blogs.json")
    // }
    // createBlog() {

    //     return this.http.get<any>("assets/blogs.json")
    // }
    // editBlog() {
    //     return this.http.get<any>("assets/blogs.json")
    // }
}