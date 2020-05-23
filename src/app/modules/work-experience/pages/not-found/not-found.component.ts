import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  get routeCompany(): string {
    const urlPathFromRoot = this.activatedRoute.snapshot.pathFromRoot;
    const companyUrls = urlPathFromRoot[urlPathFromRoot.length - 1].url;
    const companyUrl = companyUrls[companyUrls.length - 1].path;

    return companyUrl.replace(/\-/g, ' ');
  }

}
