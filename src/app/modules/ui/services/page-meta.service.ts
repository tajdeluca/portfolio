import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageMetaService {

  constructor(
    private metaService: Meta,
    private titleService: Title,
  ) { }

  updateTitle(title?: string) {
    this.titleService.setTitle(`Taj Deluca - Front End Wizard${title ? ` - ${title}` : ''}`);
  }

  updateDescription(description?: string) {
    this.metaService.updateTag({ name: 'description', content: `Hi I'm, primarily, a front-end developer based in the south of the UK. ${description}` });
  }
}
