import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { MatchService } from '../services/match.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() matchInput: any;
  @Output() matchEmitter: EventEmitter<any>=new EventEmitter();
  comment:any={}
 
  constructor(private matchService:MatchService) { }

  ngOnInit() {
  }

  scoreColor(s1,s2){
    if (s1>s2) {
      return "green";
      
    }else if (s1<s2) {
      return "orange";
      
    }else{
      return "blue";
    }

  }

  addComment(){
    
    this.comment.userId=localStorage.getItem("userId")
    this.comment.matchId=this.matchInput._id
    
    this.matchService.addComment(this.comment).subscribe(
      (data)=>{
        console.log("here data after adding comment",data.isAdded)
        this.matchService.getAllMatchesWithComments().subscribe(
          (data)=>{
            console.log("here data", data.matches)
            this.matchEmitter.emit(data.matches)
          }
        )
      }
    )
  }

}
