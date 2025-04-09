import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';  
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

// This component is responsible for displaying the home page of the application
// It fetches a list of housing locations from the HousingService and displays them
// It also provides a search functionality to filter the housing locations by city
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class=primary type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredHousingLocationList"[housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,  
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredHousingLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);

  filterResults(city: string): void {
    this.filteredHousingLocationList = this.housingLocationList.filter(housingLocation =>
      housingLocation.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
    });
  }
}

