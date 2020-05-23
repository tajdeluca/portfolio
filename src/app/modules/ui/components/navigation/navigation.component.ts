import { Component, OnInit, Inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

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

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }

  scrollToContact() {
    this.document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
    });
  }

}
