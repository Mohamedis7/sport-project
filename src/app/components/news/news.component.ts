import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsTab:any=[
    {image:"assets/images/img_3.jpg", title:"1", username:"alice",avatar:"assets/images/person_1.jpg",date:"06/04/023"},
    {image:"assets/images/img_1.jpg", title:"2", username:"amelia",avatar:"assets/images/person_2.jpg",date:"07/04/023"},
    {image:"assets/images/img_2.jpg", title:"3",  username:"mike",avatar:"assets/images/person_3.jpg",date:"08/04/023"},
  ]
  
  title:string="latest news"
  nbr:number=10;

  constructor() { }

  ngOnInit() {
  }
  
  calcul(a: number, b: number, c: number){
    return a + b + c;
  }

}
