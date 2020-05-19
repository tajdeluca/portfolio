import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  scrollingPage$ = fromEvent(window, 'scroll').pipe(
    map(_ => window.scrollY > 0),
    shareReplay(1),
  );

  constructor() { }

  ngOnInit(): void {
  }

}
