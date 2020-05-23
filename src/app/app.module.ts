import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { UiModule } from './modules/ui/ui.module';
import { WorkExperienceModule } from './modules/work-experience/work-experience.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UiModule,
    WorkExperienceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
