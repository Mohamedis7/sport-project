import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  playerForm: FormGroup;
  teams:any =[]
  constructor() { }

  ngOnInit() {
    this.teams=JSON.parse(localStorage.getItem("teams")||"[]"); }
  
  addPlayer() {

    let players = JSON.parse(localStorage.getItem("players") || "[]");
    this.player.id = this.generateId(players) + 1
    players.push(this.player);
    localStorage.setItem("players", JSON.stringify(players));
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

