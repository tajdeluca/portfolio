import { Component, OnInit } from '@angular/core';
import { PageMetaService } from 'src/app/modules/ui/services/page-meta.service';

@Component({
  selector: 'app-into-university-partnerships',
  templateUrl: './into-university-partnerships.component.html',
  styleUrls: ['./into-university-partnerships.component.scss']
})
export class IntoUniversityPartnershipsComponent implements OnInit {

  pageHeadingOne = 'INTO University Partnerships';
  pageHeadingTwo = 'Web Developer';

  constructor(
    private pageMetaService: PageMetaService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.updateTitle('My time at INTO University Partnerships');
    this.pageMetaService.updateDescription('Here is where I recall my time at INTO University Partnerships.');
  }

}
