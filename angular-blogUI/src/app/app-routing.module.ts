import {  NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {path:'', pathMatch:'full' , redirectTo:'blog'},
  {path:'user',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},
  {path:'blog',loadChildren:()=>import('./modules/blog/blog.module').then(m=>m.BlogModule)},
  {path:'study',loadChildren:()=>import('./modules/study/study.module').then(m=>m.StudyModule)}
 // {path:'**',pathMatch:'full', component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
