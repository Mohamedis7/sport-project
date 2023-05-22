import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-stadium',
  templateUrl: './edit-stadium.component.html',
  styleUrls: ['./edit-stadium.component.css']
})
export class EditStadiumComponent implements OnInit {
  stadiums:any={};
  id: any;
  stadium: any;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("x");
    this.stadiums = JSON.parse(localStorage.getItem("stadiums")||"[]");
    for (let i = 0; i < this.stadiums.length; i++) {
      if (this.stadiums[i].id==this.id) {
        this.stadium=this.stadiums[i];
        break;
        
      }
      
    }
  }
  editStadium(){
    for (let i = 0; i < this.stadiums.length; i++) {
      if (this.stadiums[i].id==this.id) {
        this.stadiums[i]=this.stadium;
        break;
        
      }
      
    }
    localStorage.setItem("stadiums",JSON.stringify(this.stadiums));
    this.router.navigate(["admin"])
  }

}
