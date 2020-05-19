import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-i-work-with',
  templateUrl: './what-i-work-with.component.html',
  styleUrls: ['./what-i-work-with.component.scss']
})
export class WhatIWorkWithComponent implements OnInit {

  tools = [
    'C# .NET Core REST APIs',
    'Azure DevOps',
    'Azure Cloud',
    'Angular 8+ Web Apps',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
