import { Component, OnInit } from '@angular/core';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  questionList:any=[]
  currentQuestion:number=0;
  isShowSxplanation=false;
  result:any

  constructor(private studyService:StudyService) { }

  ngOnInit(): void {
    this.loadQuestions()
  }

  loadQuestions(){
    this.studyService.getQuizes().subscribe(res=>{
      this.questionList= res.questions
    })
  }

  checkAns(ques:any,option:any){
    if(option.correct){
      alert("Congratulations! Your answer is correct !!")
      this.currentQuestion++
    }else{    
      //use for finding a poperty value of an array
      this.result  = this.questionList[ques].options.filter(function(o:any){return o.correct == true;} );

      alert("Wrong ! correct answer is => "+this.result[0].text+" Explanation : "+this.questionList[this.currentQuestion]?.explanation)
      this.currentQuestion++;     
      //this.isShowSxplanation=false;
      // setTimeout(()=>{
      //   this.currentQuestion++;        
      //   this.isShowSxplanation=false;
      // },5000)
    }
  }
}
