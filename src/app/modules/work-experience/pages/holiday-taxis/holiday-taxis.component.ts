import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-taxis',
  templateUrl: './holiday-taxis.component.html',
  styleUrls: ['./holiday-taxis.component.scss']
})
export class HolidayTaxisComponent implements OnInit {

  pageHeadingOne = 'HolidayTaxis';
  pageHeadingTwo = 'Senior Front-End Developer';

  constructor() { }

  ngOnInit(): void {
  }

}
