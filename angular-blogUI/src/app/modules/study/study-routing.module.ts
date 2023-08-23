import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatequizzeComponent } from './createquizze/createquizze.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { StudyComponent } from './study.component';

const routes: Routes = [
  {path:'', component:StudyComponent,
    // children:[ {path:'nestquize',component:QuizzesComponent}
    //{path:'nestcreate',component:CreatequizzeComponent} ]
},
  {path:'quize',component:QuizzesComponent},
  {path:'create',component:CreatequizzeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyRoutingModule { }
