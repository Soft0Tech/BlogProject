import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/share/models';
import { USER_URLS } from '../../../share/urls.const'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isloading=false;
  user:User=new User();

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  login(){
  //   const date1 = new Date();
  //  const date2 = ;
  //   console.log(mMagazineObject.From < this.datePipe.transform(mMagazineObject.To, 'yyyy-MM-dd') ? true : false);
    this.isloading=true;
    const params:Map<string,any>=new Map();
    let usermodel={
      userName:'',
      email:'',
      password:this.user.password
    }
    if(this.user.username.indexOf('@')>0){
      usermodel.email=this.user.username
    }else{
      usermodel.userName=this.user.username
    }
    this.http.post(USER_URLS.USER_LOGIN,usermodel).subscribe({
      next:(res)=>{
        if(res){
          console.log(res)
          this.setSession(res)
        }
      }
    })
    
   // console.log(usermodel)

   // this.router.navigate(['register'])
    // setTimeout(()=>{
    //   this.router.navigate([''])
    // },2000)
    
  }
  private setSession(authResult:any) {
    const expiresAt = (authResult.expiresIn,'second');
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
} 

// logout() {
//   localStorage.removeItem("id_token");
//   localStorage.removeItem("expires_at");
// }

isLoggedIn(datepip:DatePipe) {
  console.log(datepip.transform(new Date))
//  return DatePipe().isBefore(this.getExpiration());
}

// isLoggedOut() {
//  // return !this.isLoggedIn();
// }

// getExpiration() {
//   //const expiration = localStorage.getItem("expires_at");
//  // const expiresAt = JSON.parse(expiration);
//  // return moment(expiresAt);
// }    


}
