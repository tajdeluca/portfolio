import { Component, OnInit } from '@angular/core';
import { PageMetaService } from 'src/app/modules/ui/services/page-meta.service';

@Component({
  selector: 'app-holiday-taxis',
  templateUrl: './holiday-taxis.component.html',
  styleUrls: ['./holiday-taxis.component.scss']
})
export class HolidayTaxisComponent implements OnInit {

  pageHeadingOne = 'HolidayTaxis';
  pageHeadingTwo = 'Senior Front-End Developer';

  constructor(
    private pageMetaService: PageMetaService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.updateTitle('My time at HolidayTaxis');
    this.pageMetaService.updateDescription('Here is where I recall my time at HolidayTaxis.');
  }

}
