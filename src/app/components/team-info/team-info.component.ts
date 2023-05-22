import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  id: any;
  teams: any = [];
  team: any;

  constructor(private teamService:TeamService) { }

  ngOnInit() {
    this.id = localStorage.getItem("teamId");
   this.teamService.getTeamById(this.id).subscribe(
    (data)=>{
      console.log("here data from BE:get team by id",data);
      this.team= data.team;
    }
   )
  }

}
