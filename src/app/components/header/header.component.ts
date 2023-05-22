import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  logo:string= "assets/images/logo.png"

  
  home:string= "Home"
  matches:string= "Matchs"
  players:string= "Players"
  userRole:string;
  userId:string;


}
