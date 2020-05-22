import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CwtDigitalComponent } from './pages/cwt-digital/cwt-digital.component';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { Zen3UkComponent } from './pages/zen3-uk/zen3-uk.component';
import { HolidayTaxisComponent } from './pages/holiday-taxis/holiday-taxis.component';
import { IntoUniversityPartnershipsComponent } from './pages/into-university-partnerships/into-university-partnerships.component';



@NgModule({
  declarations: [CwtDigitalComponent, Zen3UkComponent, HolidayTaxisComponent, IntoUniversityPartnershipsComponent],
  imports: [
    CommonModule,
    WorkExperienceRoutingModule,
    UiModule,
    RouterModule,
  ]
})
export class WorkExperienceModule { }
