import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

/*  This component is responsible for displaying the details of a specific housing location.
    It fetches the housing location details from the HousingService using the ID from the route parameters.
    It also provides a form for users to apply to live at the location.
    The form includes fields for first name, last name, and email.
    When the form is submitted, it calls the submitApplication method to handle the application.
    The component uses Angular's Reactive Forms module to manage the form state and validation.
    The component is defined as a standalone component, meaning it can be used independently without being part of a module.   */
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
   <article>
      <img class="listing-photo" [src]="housingLocation?.photo" >
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}},{{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <ul>
        <h2 class="section-heading">About this location</h2>
        <li>Available Units: {{housingLocation?.availableUnits}}</li>  
        <li>Does this location have Wifi: {{housingLocation?.wifi}}</li>
        <li> Does this location have Laundry:{{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" formControlName="firstName">

          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" formControlName="lastName">

          <label for="email">Email</label>
          <input type="email" id="email" formControlName="email">
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
   </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
route: ActivatedRoute = inject(ActivatedRoute);
housingService: HousingService = inject(HousingService);
housingLocation: HousingLocation | undefined;
applyForm: FormGroup = new FormGroup({
firstName: new FormControl(''),
lastName: new FormControl(''),
email: new FormControl(''),
})

constructor() {
  const housingLocationId = Number(this.route.snapshot.params['id']);
  this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
    this.housingLocation = housingLocation;
  });
}
submitApplication() {

    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '', 
      this.applyForm.value.lastName ?? '', 
      this.applyForm.value.email ?? '');
    
  }
}

