import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ProficienciesComponent } from './components/proficiencies/proficiencies.component';
import { WhatIWorkWithComponent } from './components/what-i-work-with/what-i-work-with.component';
import { IndexComponent } from './pages/index/index.component';



@NgModule({
  declarations: [HeaderComponent, WorkExperienceComponent, ProficienciesComponent, WhatIWorkWithComponent, IndexComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
