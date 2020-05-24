import { Component, OnInit } from '@angular/core';
import { PageMetaService } from 'src/app/modules/ui/services/page-meta.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private pageMetaService: PageMetaService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.updateTitle(`I haven't found a way to make that yet...`);
    this.pageMetaService.updateDescription('You seem to have found something that doesn\'t exist!');
  }

}
