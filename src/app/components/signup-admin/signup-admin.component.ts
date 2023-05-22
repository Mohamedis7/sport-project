import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { generateId } from 'src/app/shared/generateID';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  signupAdminForm:FormGroup
  errorMsg:any

  constructor(private FormBuilder:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.signupAdminForm = this.FormBuilder.group({
      firstName:["", [Validators.required, Validators.minLength(3)]],
      lastName:["", [Validators.required, Validators.minLength(5)]],
      Email:["",[Validators.required,Validators.email]],
      password:["", [Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      confirmpwd:[""],
      tel:["",[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      
  })

}
signupAdmin(){

  
}}


