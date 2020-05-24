import { Component, OnInit } from '@angular/core';
import { PageMetaService } from 'src/app/modules/ui/services/page-meta.service';

@Component({
  selector: 'app-zen3-uk',
  templateUrl: './zen3-uk.component.html',
  styleUrls: ['./zen3-uk.component.scss']
})
export class Zen3UkComponent implements OnInit {

  pageHeadingOne = 'Zen3 UK';
  pageHeadingTwo = 'Front-End Architect';

  constructor(
    private pageMetaService: PageMetaService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.updateTitle('My time at Zen3 UK');
    this.pageMetaService.updateDescription('Here is where I recall my time at Zen3 UK.');
  }

}
