import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StripeDividerComponent } from './components/stripe-divider/stripe-divider.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    BadgeComponent,
    IconComponent,
    HeaderComponent,
    StripeDividerComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule,
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    BadgeComponent,
    IconComponent,
    HeaderComponent,
    StripeDividerComponent,
  ]
})
export class UiModule {
  constructor(@Optional() @SkipSelf() parentModule?: UiModule) {
    if (parentModule) {
      throw new Error(
        'UiModule is already loaded. Import it in the AppModule only');
    }
  }
}
