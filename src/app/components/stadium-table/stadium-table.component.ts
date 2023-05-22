import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
  stadiums:any=[]

  constructor(private router:Router) { }

  ngOnInit() {
    this.stadiums=JSON.parse(localStorage.getItem("stadiums")||"[]"); 
  }
  goToEdit(id:any){
    //alert("edit" + id);
    this.router.navigate([`editStadium/${id}`])
  }
  deleteStadium(id){
    for (let i = 0; i < this.stadiums.length; i++) {
      if (this.stadiums[i].id==id) {
        this.stadiums.splice(i,1)
        break;
      }
      
    }
    localStorage.setItem("stadiums",JSON.stringify(this.stadiums));
  }

  }

  


