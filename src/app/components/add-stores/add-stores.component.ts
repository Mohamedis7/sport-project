import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stores',
  templateUrl: './add-stores.component.html',
  styleUrls: ['./add-stores.component.css']
})
export class AddStoresComponent implements OnInit {
  store:any={};
  //matchForm:Form id
  storeForm:FormGroup;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  addStore(){
    
    let stores =JSON.parse(localStorage.getItem("stores")||"[]");
    this.store.id=this.generateId(stores) + 1
    stores.push (this.store);
    localStorage.setItem("stores", JSON.stringify(stores));
    this.router.navigate (["admin"])
}

generateId(T:any) {
  let max;
  if (T.length == 0) {
      max = 0;
  }
  else {
      max = T[0].id;

      for (var i = 1; i < T.length; i++) {
          if (T[i].id > max) {
              max = T[i].id;

          }
      }
  }
  return max;



}

}
