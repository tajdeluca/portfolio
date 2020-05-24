import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageMetaService } from 'src/app/modules/ui/services/page-meta.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private pageMetaService: PageMetaService,
  ) { }

  ngOnInit(): void {
    this.pageMetaService.updateTitle('I\'m honoured but I haven\'t worked there yet.');
    this.pageMetaService.updateDescription('You seem to have found something that doesn\'t exist!');
  }

  get routeCompany(): string {
    const urlPathFromRoot = this.activatedRoute.snapshot.pathFromRoot;
    const companyUrls = urlPathFromRoot[urlPathFromRoot.length - 1].url;
    const companyUrl = companyUrls[companyUrls.length - 1].path;

    return companyUrl.replace(/\-/g, ' ');
  }

}
