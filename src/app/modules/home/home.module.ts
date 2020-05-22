import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';
import { WhatIWorkWithComponent } from './components/what-i-work-with/what-i-work-with.component';
import { PastExperienceComponent } from './components/past-experience/past-experience.component';
import { IndexComponent } from './pages/index/index.component';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WorkExperienceComponent,
    ProficienciesComponent,
    WhatIWorkWithComponent,
    PastExperienceComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
  ]
})
export class HomeModule { }
