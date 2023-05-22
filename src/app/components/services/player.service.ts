import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL:string="http://localhost:3000/players"

  constructor(private httpClient: HttpClient) { }

  addPlayer(playerObj){
    return this.httpClient.post(this.playerURL, playerObj);
    
  }

  deletePlayer(id:any){
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
}
