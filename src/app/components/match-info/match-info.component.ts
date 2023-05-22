import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id: any;
  matches: any = [];
  match: any;



  constructor(private matchService:MatchService) { }

  ngOnInit() {
    this.id = localStorage.getItem("matchId");
   this.matchService.getMatchById(this.id).subscribe(
    (data)=> {
      console.log("here data from BL")
      this.match=data.match
    }
   )
  }



}


