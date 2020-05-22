import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zen3-uk',
  templateUrl: './zen3-uk.component.html',
  styleUrls: ['./zen3-uk.component.scss']
})
export class Zen3UkComponent implements OnInit {

  pageHeadingOne = 'Zen3 UK';
  pageHeadingTwo = 'My second job, at a much smaller branch based in Brighton';

  constructor() { }

  ngOnInit(): void {
  }

}
