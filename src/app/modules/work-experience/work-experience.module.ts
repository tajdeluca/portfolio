import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CwtDigitalComponent } from './pages/cwt-digital/cwt-digital.component';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CwtDigitalComponent],
  imports: [
    CommonModule,
    WorkExperienceRoutingModule,
    UiModule,
    RouterModule,
  ]
})
export class WorkExperienceModule { }
