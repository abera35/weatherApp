import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})

export class WeatherDisplayComponent {
  weatherData$: Observable<any>;
  
  constructor(private weatherService: WeatherService) {
    this.weatherData$ = this.weatherService.getWeather('Ankara');
  }
}
