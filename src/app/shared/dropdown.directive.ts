import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    constructor(private elementRef: ElementRef) {}

    @HostBinding('class.open')
    openClass: boolean = false;

    @HostListener('document:click', ['$event'])
    onHostClicked(event: Event) {
        this.openClass = this.elementRef.nativeElement.contains(event.target) ? !this.openClass : false;
    }
}