import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
// This file contains the route configuration for the application
// It defines the paths and the components that should be loaded for each path
// The routes are used by the Angular Router to navigate between different views in the application
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page',
    }
];


export default routeConfig;