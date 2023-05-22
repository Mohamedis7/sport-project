import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamTab:any=[]
 
  constructor(private teamService:TeamService) { }

  ngOnInit() {
   this.teamService.getAllTeams().subscribe(
    (data)=>{
      
      this.teamTab=data.teamsArray
    }
   )
    
  }

}
