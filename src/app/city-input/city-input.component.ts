import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrl: './city-input.component.css'
})

export class CityInputComponent {
  cityName: string = '';

  weatherData$!: Observable<any>; 

  constructor(private weatherService: WeatherService) {}

  onSubmit(): void {
    if (this.cityName.trim()) {
      this.weatherData$ = this.weatherService.getWeather(this.cityName.trim());
    } else {
      console.error('Error');
    }
  }
}