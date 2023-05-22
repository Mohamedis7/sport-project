import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches:any=[]

  constructor(private matchService:MatchService, private router:Router) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches=data.matchesArray;
      }
    )
   
  }

  displayMatch(id){
    localStorage.setItem("matchId",id)
    this.router.navigate(["matchInfo"])
  }

  goToEdit(id:any){
    this.router.navigate([`editMatch/${id}`])
  }

  deleteMatch(id){
    this.matchService.deleteMatch(id).subscribe(
      (data)=>{
        console.log("here response from BE", data.isDeleted)
        this.matchService.getAllMatches().subscribe(
          (data)=>{
            this.matches=data.matchesArray;
          }
        )
      }
    )
  }
  



  

}
