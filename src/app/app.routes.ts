import {Routes} from '@angular/router';
import {PropertiesComponent} from "./landlord/properties/properties.component";
import {authorityRouteAccess} from "./core/auth/authority-route-access";
import {HomeComponent} from "./home/home.component";
import {DisplayListingComponent} from "./display-listing/display-listing.component";
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";
import {BookedListingComponent} from "./tenant/booked-listing/booked-listing.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'landlord/properties',
    component: PropertiesComponent,
    canActivate: [authorityRouteAccess],
    data: {
      authorities: ["ROLE_LANDLORD"]
    }
  },
  {
    path: 'listing',
    component: DisplayListingComponent
  },
  {
    path: "booking",
    component: BookedListingComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
