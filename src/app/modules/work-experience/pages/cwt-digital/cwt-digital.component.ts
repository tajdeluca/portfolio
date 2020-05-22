import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cwt-digital',
  templateUrl: './cwt-digital.component.html',
  styleUrls: ['./cwt-digital.component.scss']
})
export class CwtDigitalComponent implements OnInit {

  pageHeadingOne = 'CWT Digital';
  pageHeadingTwo = 'My very first job, at a small digital agency based in Brighton';

  constructor() {
  }

  ngOnInit(): void {
  }

}
