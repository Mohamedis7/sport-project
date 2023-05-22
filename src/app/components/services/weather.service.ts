import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherURL: string = "http://localhost:3000/weather"

  constructor(private httpClient:HttpClient) { }
  search(city){
    return this.httpClient.post<{result:any}>(this.weatherURL, city)
  }
}
