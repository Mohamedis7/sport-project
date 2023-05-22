import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //backend server address
  matchURL: string = "http://localhost:3000/matches"
  // httpClient : un livreur
  constructor(private httpClient: HttpClient) { }
  // reponse tableau d objet m local storage
  getAllMatches() {
    return this.httpClient.get<{ matchesArray: any, message: string }>(this.matchURL)
  }
  //reponse one object
  getMatchById(id: any) {

    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);
  }
  //reponse Message/Boolean
  deleteMatch(id: any) {
    return this.httpClient.delete<{ isDeleted: boolean }>(`${this.matchURL}/${id}`);
  }

  //reponse Message/Boolean

  addMatch(matchObj) {
    return this.httpClient.post<{ message: string }>(this.matchURL, matchObj);

  }
  //reponse Message/Boolean
  editMatch(newMatch) {
    return this.httpClient.put<{ isUpdated: boolean }>(this.matchURL, newMatch)
  }

  searchMatch(obj) {
    return this.httpClient.post<{ isUpdated: boolean }>(`${this.matchURL}/search`, obj)
  }

  addComment(obj) {
    return this.httpClient.post<{isAdded:boolean}>(`${this.matchURL}/comment`, obj)
  }
  //response array of objects
  getAllMatchesWithComments() {
    return this.httpClient.get<{matches:any}>(`${this.matchURL}/comments/getAll`)
  }

}
