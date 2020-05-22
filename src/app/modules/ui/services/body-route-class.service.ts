import { Injectable, Renderer2, RendererFactory2, Inject} from '@angular/core';
import { Navigation } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BodyRouteClassService {

  private renderer: Renderer2;
  private previousClass: string = null;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  updateClass(navigation: Navigation) {
    if (this.previousClass) {
      this.renderer.removeClass(this.document.body, this.previousClass);
    }

    const newClass = navigation.finalUrl?.root?.children?.primary?.segments?.pop()?.path;

    if (newClass) {
      this.renderer.addClass(this.document.body, newClass);
      this.previousClass = newClass;
    }
  }
}
