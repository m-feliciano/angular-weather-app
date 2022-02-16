import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OpenWeatherService } from '../open-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm !: FormGroup;
  public weatherData: any;
  public now: number = Date.now();

  constructor(
    private formBuilder: FormBuilder,
    private openWeatherService: OpenWeatherService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    setInterval(() => this.now = Date.now(), 60000);
  }

  getWeather(formValues: { location: any; }) {
    this.openWeatherService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data);
  }

  getDateFrom(data: any) {
    return (new Date(data * 1000) + '').slice(16, 21);
  }

}
