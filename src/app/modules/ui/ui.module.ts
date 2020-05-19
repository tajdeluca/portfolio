import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';



@NgModule({
  declarations: [NavigationComponent, FooterComponent, BadgeComponent, IconComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    BadgeComponent,
    IconComponent,
  ]
})
export class UiModule { }
