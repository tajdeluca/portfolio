import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BodyRouteClassService } from './modules/ui/services/body-route-class.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  constructor(
    private router: Router,
    private bodyRouteClassService: BodyRouteClassService,
  ) {}

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.bodyRouteClassService.updateClass(this.router.getCurrentNavigation());
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
