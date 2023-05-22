import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from '../services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any = {};
  teamForm:FormGroup
  stadiums:any=[]

  constructor(private teamService:TeamService, private router:Router) { }

  ngOnInit() {

    
  }
  addteam() {
    this.teamService.addTeam(this.team).subscribe(
      (data)=>{
        console.log("here data from BE", data.message)
        this.router.navigate(["admin"])
      }
    )

   
  }
  generateId(T: any) {
    let max;
    if (T.length == 0) {
      max = 0;
    }
    else {
      max = T[0].id;

      for (var i = 1; i < T.length; i++) {
        if (T[i].id > max) {
          max = T[i].id;

        }
      }
    }
    return max;



  }

}
