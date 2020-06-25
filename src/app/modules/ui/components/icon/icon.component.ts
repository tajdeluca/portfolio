import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() iconStyle: 'wand'|'present'|'past' = 'wand';
  @Input() backgroundStyle = 'proficiency';

  constructor() { }

  ngOnInit(): void {
  }

}
