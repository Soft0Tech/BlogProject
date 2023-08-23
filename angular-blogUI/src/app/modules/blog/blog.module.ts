import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SinglebolgComponent } from './singlebolg/singlebolg.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { MaterialreferenceModule } from 'src/app/materialreference/materialreference.module';
import { FormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';


@NgModule({
  declarations: [
    BlogComponent,
    SinglebolgComponent,
    CreateblogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialreferenceModule,
    FormsModule,
    NgxSummernoteModule ///for using rich text editor
  ]
})
export class BlogModule { }
