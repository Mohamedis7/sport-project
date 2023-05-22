import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teams:any={};
  id: any;
  team: any;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("x");
    this.teams = JSON.parse(localStorage.getItem("teams")||"[]");
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id==this.id) {
        this.team=this.teams[i];
        break;
        
      }
      
    }
   
  }
  editTeam(){
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].id==this.id) {
        this.teams[i]=this.team;
        break;
        
      }
      
    }
    localStorage.setItem("teams",JSON.stringify(this.teams));
    this.router.navigate(["admin"])
  }

}
