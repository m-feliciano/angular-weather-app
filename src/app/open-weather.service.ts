import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  _token: string = "9a44ac1e44105d364892553900a8e327"

  constructor(private http: HttpClient) { }

  getWeather(cityName: string) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this._token}`
    );
  }
}
