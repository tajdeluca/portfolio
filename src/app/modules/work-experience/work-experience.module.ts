import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CwtDigitalComponent } from './components/cwt-digital/cwt-digital.component';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';



@NgModule({
  declarations: [CwtDigitalComponent],
  imports: [
    CommonModule,
    WorkExperienceRoutingModule,
  ]
})
export class WorkExperienceModule { }
