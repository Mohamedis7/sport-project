import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  articlesTab: any =[
    {image: "assets/images/img_1.jpg",date:"5/4/2023", title:"1",description:"nice"},
    {image: "assets/images/img_2.jpg",date:"7/4/2023", title:"2",description:"nice"},
    {image: "assets/images/img_3.jpg",date:"8/4/2023", title:"3",description:"nice"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
