import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  usersTab: any = [];
  errorMsg: string;
  title:any="login"
  actualDate:any=new Date()

  constructor(private FormBuilder: FormBuilder, private router: Router,
    private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      Email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required]],

    })
  }
  login() {
    this.userService.login(this.loginForm.value).subscribe(
     (data)=> {
      if (data.message=="2") {
        localStorage.setItem("userId",data.user.id)
        localStorage.setItem("userRole",data.user.role)
        
        this.router.navigate([`profile/${data.user.id}`])
        
      }else{
        this.errorMsg="please check Email/pwd"
      }
      
     
     });
     
   
    // }
    // if (exist) { //si le compte existe
    //   localStorage.setItem("connectedUserId", userId)
    //   this.router.navigate([""]);
    // }
    // else { //si le compte n'existe pas
    //   this.errorMsg = "please check Email/pwd"
    // }

  }
}


