import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-singlebolg',
  templateUrl: './singlebolg.component.html',
  styleUrls: ['./singlebolg.component.css']
})
export class SinglebolgComponent implements OnInit {
  post!:any

  constructor(private acRout:ActivatedRoute,
    private blogService:BlogService) { }

  ngOnInit(): void {
    let id=this.acRout.snapshot.params['id']
    console.log(id)
    this.getBlog(id);
  }
getBlog(id:any){
  this.blogService.getBlogById(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.post=res
    },error:(err)=>{
      console.log(err)
    }
  })
}
}
