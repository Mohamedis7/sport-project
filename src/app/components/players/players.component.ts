import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playerTab:any =[
    {Image:"assets/images/img_1.jpg", Name:"Neymar", Nbr:"10", position:"attack", age:"30"},
    {Image:"assets/images/img_2.jpg", Name:"CR7", Nbr:"7", position:"mdf", age:"39"},
    {Image:"assets/images/img_3.jpg", Name:"Messi", Nbr:"10", position:"attack", age:"38"},
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
