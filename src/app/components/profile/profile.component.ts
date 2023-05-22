import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any 
  id:any

  constructor(private activatedroute:ActivatedRoute, private userService:UserService) { }

  ngOnInit() {
    this.id=this.activatedroute.snapshot.paramMap.get("id")
    this.userService.getUserById(this.id).subscribe(
      (data)=>{
        this.user=data.user
      }
    )
  }

}
