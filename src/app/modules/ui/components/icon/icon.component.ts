import { Component, OnInit, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  readonly wandOptions: AnimationOptions = {
    path: '/assets/icons/wand-animation.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  @Input() iconStyle = 'wand';
  @Input() backgroundStyle = 'proficiency';

  constructor() { }

  ngOnInit(): void {
  }

}
