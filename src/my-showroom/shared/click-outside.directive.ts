import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

/**
 * @description
 * Directive permettant de savoir lorsqu'un clic se produit en dehors de l'élément passé en paramètre
 * @export
 * @class ClickOutsideDirective
 */
@Directive({
  selector: '[msClickOutside]'
})
export class ClickOutsideDirective {

  constructor(
    private _elementRef: ElementRef
  ) {
  }

  @Output() public clickedOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickedOutside.emit(null);
    }
  }
}
