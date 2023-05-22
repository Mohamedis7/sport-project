import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players:any=[];

  constructor() { }

  ngOnInit() {
    this.players=JSON.parse(localStorage.getItem("players")||"[]");
  }
  deletePlayer(id){
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id==id) {
        this.players.splice(i,1)
        break;
      }
      
    }
    localStorage.setItem("players",JSON.stringify(this.players));
  }

}
