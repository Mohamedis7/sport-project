import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  obj:any={}
  city:any={}
  result:any={};
  searchForm:FormGroup

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
  }

  search(){
   
    this.weatherService.search(this.obj).subscribe( (data)=>{
      this.result=data.result;
     
    })
    
  }

}
