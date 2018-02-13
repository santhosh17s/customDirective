import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTabName]'
})
export class TabNameDirective {


  constructor(elem: ElementRef, render:Renderer2) {
    let name = render.createText("Custom Tab Control");
    render.appendChild(elem.nativeElement, name);
   }

}
