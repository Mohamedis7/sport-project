import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generateId } from 'src/app/shared/generateID';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMsg: string;
  imagePreview: any


  constructor(private FormBuilder: FormBuilder,
    private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.FormBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      confirmpwd: [""],
      tel: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      img: [""],

    })
  }
  signup() {
    this.signupForm.value.role = "user"
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((data) => {
      console.log(data.message)
      if (data.message) {
        this.router.navigate(["signin"])

      } else {
        this.errorMsg = "email exists"
      }

    })
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

  checkEmail(email, usersTab) {
    let exist = false;
    for (let i = 0; i < usersTab.length; i++) {
      if (usersTab[i].email == email) {
        exist = true;
        break;

      }

    }
    return exist;

  }
}











