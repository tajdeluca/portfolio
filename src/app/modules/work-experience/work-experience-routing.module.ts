import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CwtDigitalComponent } from './components/cwt-digital/cwt-digital.component';


const routes: Routes = [
  {
    path: 'work-experience',
    children: [
      {
        path: 'cwt-digital',
        component: CwtDigitalComponent,
      }
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
