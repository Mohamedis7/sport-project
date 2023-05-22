import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  obj: any ={scoreOne:1,scoreTwo:2,teamOne:"JUV",teamTwo:"NAP"}

  constructor() { }

  ngOnInit() {
  }

}
