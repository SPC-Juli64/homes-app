import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location'; 

@Injectable({
  providedIn: 'root'
})
export class HousingService {url='http://localhost:3000/locations';

  constructor() { }

  // This method is used to fetch all housing locations from the server
  // It returns a promise that resolves to an array of HousingLocation objects
  // If the fetch fails, it returns an empty array
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return data.json() ?? [];
  }

  // This method is used to fetch a specific housing location by its ID
  // It returns a promise that resolves to a HousingLocation object
  // If the fetch fails, it returns undefined
  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {

    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
}}
