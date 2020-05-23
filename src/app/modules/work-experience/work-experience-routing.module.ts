import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CwtDigitalComponent } from './pages/cwt-digital/cwt-digital.component';
import { Zen3UkComponent } from './pages/zen3-uk/zen3-uk.component';
import { HolidayTaxisComponent } from './pages/holiday-taxis/holiday-taxis.component';
import { IntoUniversityPartnershipsComponent } from './pages/into-university-partnerships/into-university-partnerships.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
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
  {
    path: '',
    redirectTo: 'cwt-digital',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkExperienceRoutingModule { }
