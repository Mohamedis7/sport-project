import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  serachForm:FormGroup
  match:any={};
  findedMatches:any
  matches:any = [];

  constructor(private matchService:MatchService) { }

  ngOnInit() {
    
  }

  searchObject() {
    
   this.matchService.searchMatch(this.match).subscribe(
    (data)=>{
      
    }
   )
    
   

}
}
