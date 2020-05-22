import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CwtDigitalComponent } from './pages/cwt-digital/cwt-digital.component';
import { Zen3UkComponent } from './pages/zen3-uk/zen3-uk.component';
import { HolidayTaxisComponent } from './pages/holiday-taxis/holiday-taxis.component';
import { IntoUniversityPartnershipsComponent } from './pages/into-university-partnerships/into-university-partnerships.component';


const routes: Routes = [
  {
    path: 'work-experience',
    children: [
      {
        path: 'cwt-digital',
        component: CwtDigitalComponent,
      },
      {
        path: 'zen3-uk',
        component: Zen3UkComponent,
      },
      {
        path: 'holidaytaxis',
        component: HolidayTaxisComponent,
      },
      {
        path: 'into-university-partnerships',
        component: IntoUniversityPartnershipsComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class WorkExperienceRoutingModule { }
