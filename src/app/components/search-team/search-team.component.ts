import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {
  searchForm: FormGroup
  team: any = {};
  findedTeam: any = {};
  teams: any = [];
  stadiums: any = [];
  players: any = [];
  findedPlayer: any = {};


  constructor() { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]")
    this.players = JSON.parse(localStorage.getItem("players") || "[]")
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]")
  }

  searchObject() {
    let teamName = this.team.name
    this.findedTeam = {};
    for (let i = 0; i < this.teams.length; i++) {
      if ((this.teams[i].name).toLowerCase() == teamName.toLowerCase()) {
        this.findedTeam = this.teams[i]
        break;
      }

    }



  }
  searchTeamStadium(sId) {
    return this.stadiums.find((obj) => { return obj.id == sId })
  }
  searchTeamPlayers(tId) {
    this.findedPlayer=[]

    //for (let i = 0; i < this.players.length; i++) {
      //if (this.players[i].teamId == tId) {
       // this.findedPlayer.push(this.players[i]);

      //}

    //}
    this.findedPlayer= this.players.filter((obj) => {return obj.teamId == tId})
    return this.findedPlayer;
  }

}
