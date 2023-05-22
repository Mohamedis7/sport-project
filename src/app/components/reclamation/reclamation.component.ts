import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReclamationService } from '../services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
  
})
export class ReclamationComponent implements OnInit {
  reclamationForm: FormGroup;
  errorMsg: string;
  userReclamations:any=[]
  id:any

  constructor(private FormBuilder: FormBuilder, private reclamationService:ReclamationService) { }

  ngOnInit() {
     this.id=localStorage.getItem("userId")
    this.reclamationService.getAllReclamations(this.id).subscribe(
      (data)=>{
        this.userReclamations=data.reclamations
      }
    )
    this.reclamationForm = this.FormBuilder.group({
      subject: ["", [Validators.required]],
      description: ["", [Validators.required]],
     

    })
  }
  addReclamation(){
    
    this.reclamationForm.value.userId=this.id
   this.reclamationService.addReclamation(this.reclamationForm.value).subscribe(
    (data)=>{
      console.log("here data after save",data.isAdded)
    }
   )
    

  }

}
