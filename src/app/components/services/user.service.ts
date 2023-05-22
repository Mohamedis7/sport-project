import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:3000/users"

  constructor(private httpClient: HttpClient) { }
  signup(user, file: File) {
    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.password);
    formData.append("role", user.role);
    
    formData.append("img", file);
    if (user.tel) {
      formData.append("tel", user.tel)
    }
    return this.httpClient.post<{ message: boolean }>(this.userURL + "/signup", formData)

  }

  login(user) {
    return this.httpClient.post<{ message: string, user: any }>(this.userURL + "/login", user)


  }

  getUserById(id){
    return this.httpClient.get<{user:any}>(`${this.userURL}/${id}`)
  }
}
