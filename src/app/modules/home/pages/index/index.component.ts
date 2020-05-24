import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageMetaService } from 'src/app/modules/ui/services/page-meta.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  pageHeadingOne = 'Hi there! I\'m Taj.';
  pageHeadingTwo = 'But you can call me a <span class="nowrap">Front-End</span> wizard.';

  constructor(
    private pageMetaService: PageMetaService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.updateTitle();
    this.pageMetaService.updateDescription();
  }

}
