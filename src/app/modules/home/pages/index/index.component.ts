import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private metaService: Meta,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Taj Deluca - Front End Wizard');
    this.metaService.updateTag({ name: 'description', content: `Hi I'm, primarily, a front-end developer based in the south of the UK.` });
  }

}
