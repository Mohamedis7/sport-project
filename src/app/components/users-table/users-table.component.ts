import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users:any={}

  constructor() { }

  ngOnInit() {
    this.users=JSON.parse(localStorage.getItem("users")||"[]");

  }

}
