import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any; // Holds weather data
  city: string | null = null; // Holds the city name
  hasError: boolean = false; // Flag to indicate an error

  constructor(private weatherApiService: WeatherApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.city = params.get('city');
      this.fetchWeather(); // Fetch weather data for the specified city
    });
  }

  fetchWeather(): void {
    if (this.city) { // Check if city is not null
      this.weatherApiService.getWeather(this.city).subscribe(
        (data: any) => {
          this.weatherData = data; // Assign API response to weatherData
          this.hasError = false; // Reset error flag
        },
        (error: any) => {
          console.error('Error fetching weather data:', error);
          this.weatherData = null; // Clear weather data
          this.hasError = true; // Set error flag to true
        }
      );
    } else {
      console.error('City is null');
      this.hasError = true; // Set error flag to true if city is null
    }
}


  getWeatherIconUrl(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`; // Returns weather icon URL
  }
}
