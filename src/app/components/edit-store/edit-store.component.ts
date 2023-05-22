import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css']
})
export class EditStoreComponent implements OnInit {
  stores:any={};
  id: any;
  store: any;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("x");
    this.stores = JSON.parse(localStorage.getItem("stores")||"[]");
    for (let i = 0; i < this.stores.length; i++) {
      if (this.stores[i].id==this.id) {
        this.store=this.stores[i];
        break;
        
      }
      
    }
  }
  editStore(){
    for (let i = 0; i < this.stores.length; i++) {
      if (this.stores[i].id==this.id) {
        this.stores[i]=this.store;
        break;
        
      }
      
    }
    localStorage.setItem("stores",JSON.stringify(this.stores));
    this.router.navigate(["admin"])
  }

}
