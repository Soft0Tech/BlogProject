import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  userName!:string;
  questionList:any=[];
  isShowSxplanation:boolean=false;
  isIntime=true;
  currentQuestion:number=0;
  quesitonLenth:number=5;
  points:number=0;
  currectAnsNum:number=0;
  incurrectAnsNum:number=0;
  progress='0';
  counter=60

  constructor(private studyService:StudyService) { }

  ngOnInit(): void {
    this.userName=localStorage.getItem("name")??"User";
   // this.userName=localStorage.getItem("name")!;
   this.loadQuizes()
   this.timer()
  }

  loadQuizes(){
    this.studyService.getQuizes().subscribe(res=>{
      this.questionList= res.questions
     // this.questionList= this.makequestion(res.questions,this.quesitonLenth);
      console.log(this.questionList)
    })
  }

nextQuestion(){
  if(this.quesitonLenth-1>this.currentQuestion){
    this.currentQuestion++;
    this.isShowSxplanation=false;
  }
  
}
previousQuestion(){
  if(this.currentQuestion>0){
    this.currentQuestion--;    
    this.isShowSxplanation=false;
  }
}
checkAns(questionposition:number,option:any){
 // console.log(option.correct)
if(this.isIntime){
  if(option.correct){
    this.points+=10
    this.currectAnsNum++;
  }else{
    this.points-=5;
    this.incurrectAnsNum++;
  }
  this.nextQuestion()
}
this.progressPersent()
}
timer(){
  interval(1000).subscribe(val=>{
    if(this.counter===0){
      this.isIntime=false
    }else{
      this.counter--;
    }
  })
}

progressPersent(){
this.progress=String((this.currectAnsNum/this.questionList.length)*100);
return this.progress
}

  makequestion(sourceArray:any, neededElements:number){
    let resutlarray=new Array(neededElements);
    let n = sourceArray.length;

    if(!Array.isArray(sourceArray)){
      throw new TypeError("Population must be an array.");
    }else if(neededElements < 0 || neededElements > n){
      throw new RangeError("Sample larger than population or is negative");
    }
  /////// Bolck 1 ///////
  var setsize = 21;   // size of a small set minus size of an empty list

  if(neededElements > 5)
      setsize += Math.pow(4, Math.ceil(Math.log(neededElements * 3) / Math.log(4)))

  if(n <= setsize){
      // An n-length list is smaller than a k-length set
      var pool = sourceArray.slice();
      for(var i = 0; i < neededElements; i++){          // invariant:  non-selected at [0,n-i)
          var j = Math.random() * (n - i) | 0;
          resutlarray[i] = pool[j];
          pool[j] = pool[n - i - 1];       // move non-selected item into vacancy
      }
  }else{
      var selected = new Set();
      for(var i = 0; i < neededElements; i++){
          var j = Math.random() * n | 0;
          while(selected.has(j)){
              j = Math.random() * n | 0;
          }
          selected.add(j);
          resutlarray[i] = sourceArray[j];
      }
  }
  /////// Bolck 1 close ///////


return resutlarray;

  }

}
