import { Component,Input, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab:any =[]

  

  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatchesWithComments().subscribe(
     (data)=>{
      console.log("here data",data.matches)
      this.matchesTab=data.matches
     }

    )
    
  }

  updateMatches(tab:any){
this.matchesTab=tab
  }

}
