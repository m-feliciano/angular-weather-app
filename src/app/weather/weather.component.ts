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

  constructor(
    private formBuilder: FormBuilder,
    private openWeatherService: OpenWeatherService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToOpenWeather(formValues: { location: any; }) {
    this.openWeatherService
      .getWeather(formValues.location)
      .subscribe(data => console.log(data));
    console.log(formValues);
  }

}
