import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BLOG_URLS } from 'src/app/share/urls.const';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
  categoris=[
    {value: 'steak-0', viewValue: 'Normal post'},
    {value: 'pizza-1', viewValue: 'Science post'},
    {value: 'tacos-2', viewValue: 'Tech Post'},
  ]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   
  }

  savePost(form:NgForm){
    
    let postmodel={
      title:form.value.title,
      postBody:form.value.content,
      category:[form.value.category],
      userId:0,
    }
    console.log(postmodel)
   this.http.post(BLOG_URLS.POST_BLOG,postmodel)
  }

  config = {
    placeholder: 'This is initial',
     tabsize: 2, 
     height: 100,
      uploadImagePath: '',
       toolbar:  [ // [groupName, [list of button]] ['misc', ['codeview', 'undo', 'redo']], 
        ['style', ['bold', 'italic', 'underline', 'clear']], ['font', ['bold',
          'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
        ['fontsize', ['fontname', 'fontsize', 'color']], ['para', ['style', 'ul', 'ol',
          'paragraph', 'height']], ['insert', ['table', 'picture', 'link', 'video',
            'hr']]], 
            fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS',
              'Courier New', 'Roboto', 'Times']
  }


  summernoteInit(event:any) {
    console.log(event);
  }
}
