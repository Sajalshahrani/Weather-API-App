
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'weather/:city', component: WeatherComponent }, 
  { path: '', redirectTo: '/weather', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/weather' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
