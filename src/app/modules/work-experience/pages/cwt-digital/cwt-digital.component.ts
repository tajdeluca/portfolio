import { Component, OnInit } from '@angular/core';
import { PageMetaService } from 'src/app/modules/ui/services/page-meta.service';

@Component({
  selector: 'app-cwt-digital',
  templateUrl: './cwt-digital.component.html',
  styleUrls: ['./cwt-digital.component.scss']
})
export class CwtDigitalComponent implements OnInit {

  pageHeadingOne = 'CWT Digital';
  pageHeadingTwo = 'From Web Developer to Front-End Architect';

  constructor(
    private pageMetaService: PageMetaService,
  ) {
  }

  ngOnInit(): void {
    this.pageMetaService.updateTitle('My time at CWT Digital');
    this.pageMetaService.updateDescription('Here is where I recall my time at CWT Digital.');
  }

}
