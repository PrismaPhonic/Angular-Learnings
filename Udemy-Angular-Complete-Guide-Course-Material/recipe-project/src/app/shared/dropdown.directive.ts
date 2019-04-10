import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {
  private isOpen = false;
  private dropdownEl: ElementRef;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleMenu(event: Event) {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.ShowMenu();
    } else {
      this.HideMenu();
    }
  }

  ShowMenu() {
    this.renderer.addClass(this.dropdownEl, 'show');
  }

  HideMenu() {
    this.renderer.removeClass(this.dropdownEl, 'show');
  }

  ngAfterViewInit(): void {
    this.dropdownEl = this.elRef.nativeElement.querySelector('.dropdown-menu');
  }
}
