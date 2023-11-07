import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts!:any[]

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getBlogs()
  }


getBlogs(){
  this.blogService.getBlog().subscribe({
    next:(res)=>{
      console.log(res)
      this.posts=res
    },error:(err)=>{
      console.log(err)
    }
  })
}


  
  panelOpenState: boolean = false;
  togglePanel() {
      this.panelOpenState = !this.panelOpenState
  }
  
}
