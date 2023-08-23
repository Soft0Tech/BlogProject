import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isloading=false
  constructor() { }

  ngOnInit(): void {
  }
register(){

}


selectedFile: any = null;

onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    console.log(this.selectedFile)

}

// @ViewChild('fileInput')
//   fileInput!:any;

//   file: File | null = null;

//   onClickFileInputButton(): void {
//     this.fileInput.nativeElement.click();
//   }

//   onChangeFileInput(): void {
//     const files: { [key: string]: File } = this.fileInput.nativeElement.files;
//     this.file = files[0];
//   }
}
