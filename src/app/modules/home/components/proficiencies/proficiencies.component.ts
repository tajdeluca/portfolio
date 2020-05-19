import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.scss']
})
export class ProficienciesComponent implements OnInit {

  proficiencies = [
    'JavaScript',
    'TypeScript',
    'CSS',
    'SCSS',
    'Webpack',
    'HTML',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
