import { Component, OnInit } from '@angular/core';
import {FormGroup}from '@angular/forms'
import { MatchService } from '../services/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //match:object
  match:any={};
  //matchForm:Form id
  matchForm:FormGroup;

  constructor(private matchService:MatchService, private router:Router) { }

  ngOnInit() {
  }
 
  //function add match
  addMatch(){
   this.matchService.addMatch(this.match).subscribe(
    (data)=>{
      console.log("here data from Be", data.message)
      this.router.navigate(["admin"]);
    }
   )
}



 generateId(T:any) {
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

