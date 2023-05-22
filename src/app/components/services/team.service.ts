import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //backend server address
  teamURL:string="http://localhost:3000/teams"

  constructor(private httpClient: HttpClient) { }

  getAllTeams(){
    return this.httpClient.get<{teamsArray:any,message:string}>(this.teamURL)
    }

    getTeamById(id:any){
   
      return this.httpClient.get<{team:any}>(`${this.teamURL}/${id}`);
    }

    deleteTeam(id:any){
      return this.httpClient.delete(`${this.teamURL}/${id}`);
    }

    addTeam(teamObj){
      return this.httpClient.post<{message:string}>(this.teamURL, teamObj);
      
    }

    editTeam(newTeam){
      return this.httpClient.put(this.teamURL, newTeam)
        }
}
