import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialreferenceModule } from './materialreference/materialreference.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './modules/user/user.module';
import { BlogModule } from './modules/blog/blog.module';
import { StudyModule } from './modules/study/study.module';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavComponent } from './share/nav/nav.component';
import { ConfirmDialogComponent } from './share/confirm-dialog/confirm-dialog.component';
import { BlogCardComponent } from './share/blog-card/blog-card.component';

const module=[UserModule,BlogModule,StudyModule,BrowserAnimationsModule,MaterialreferenceModule]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ConfirmDialogComponent,
    BlogCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    module
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
