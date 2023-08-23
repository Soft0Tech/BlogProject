import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyRoutingModule } from './study-routing.module';
import { StudyComponent } from './study.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { CreatequizzeComponent } from './createquizze/createquizze.component';
import { MaterialreferenceModule } from 'src/app/materialreference/materialreference.module';


@NgModule({
  declarations: [
    StudyComponent,
    QuizzesComponent,
    CreatequizzeComponent
  ],
  imports: [
    CommonModule,
    StudyRoutingModule,
    MaterialreferenceModule
  ]
})
export class StudyModule { }
