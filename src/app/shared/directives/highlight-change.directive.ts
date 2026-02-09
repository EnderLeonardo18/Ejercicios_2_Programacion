import { Directive, ElementRef, Input, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightChange]',
  standalone: true
})
export class HighlightChangeDirective implements OnChanges {
  @Input('appHighlightChange') currentPrice!: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    const prev = changes['currentPrice'].previousValue;
    const curr = changes['currentPrice'].currentValue;

    if (prev !== undefined) {
      const className = curr > prev ? 'flash-green' : 'flash-red';
      this.renderer.addClass(this.el.nativeElement, className);
      setTimeout(() => this.renderer.removeClass(this.el.nativeElement, className), 150);
    }
  }
}
