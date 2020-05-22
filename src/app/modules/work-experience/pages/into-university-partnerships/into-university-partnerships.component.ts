import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-into-university-partnerships',
  templateUrl: './into-university-partnerships.component.html',
  styleUrls: ['./into-university-partnerships.component.scss']
})
export class IntoUniversityPartnershipsComponent implements OnInit {

  pageHeadingOne = 'INTO University Partnerships';
  pageHeadingTwo = 'My current job, which is currently based at home because of Covid-19!';

  constructor() { }

  ngOnInit(): void {
  }

}
