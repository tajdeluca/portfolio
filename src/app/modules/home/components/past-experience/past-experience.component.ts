import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-experience',
  templateUrl: './past-experience.component.html',
  styleUrls: ['./past-experience.component.scss']
})
export class PastExperienceComponent implements OnInit {

  pastTools = [
    'AWS',
    'Jenkins',
    'PHP',
    'AngularJS',
    'jQuery',
    'VueJS',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
