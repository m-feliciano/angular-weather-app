import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  _token: string = ""

  constructor(private http: HttpClient) { }

  getWeather(cityName: string) {
    // api.openweathermap.org / data / 2.5 / weather ? q = { city name }, { state code } & appid={API key }
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this._token}`
    );
  }
}
