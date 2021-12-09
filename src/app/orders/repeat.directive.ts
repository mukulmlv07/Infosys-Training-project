import { Directive, TemplateRef, ViewContainerRef, Input,ElementRef,Renderer2 } from '@angular/core';
@Directive({
  selector: '[appRepeat]',
  exportAs: 'changeMessage'
})
export class RepeatDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  onClick(changeNumber:number) {
    console.log(changeNumber,this.el.nativeElement.childNodes)
    for(let i=0;i<4;i++){
      this.renderer.setStyle(this.el.nativeElement.childNodes[i], 'display', 'none');
    }
    this.renderer.setStyle(this.el.nativeElement.childNodes[changeNumber], 'display', 'block');
  }
}
