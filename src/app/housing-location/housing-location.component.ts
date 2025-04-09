import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

// This component is responsible for displaying individual housing locations
// It takes a HousingLocation object as input and displays its details
// It also provides a link to view more details about the housing location
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}"/>
      <h2 class="listing-heading">{{ housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      <a [routerLink]="['/details',housingLocation.id]">Learn more</a>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

}
