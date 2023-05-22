import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matches:any={};
  id: any;
  match: any=[];

  constructor(private activatedRoute:ActivatedRoute, private router:Router,private matchService:MatchService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("x");
   this.matchService.getMatchById(this.id).subscribe(
    (data) => {
      this.match=data.match
    }
   )
    
  }
  editMatch(){
   this.matchService.editMatch(this.match).subscribe(
    (data)=>{
      console.log("here data after edit", data)
    }
   )
    this.router.navigate(["admin"])
  }

}
