import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    // Remove any non-numeric characters
    const numericValue = value.replace(/[^0-9.]/g, '');

    // Format the value with two decimal places and add ".00"
    const formattedValue = parseFloat(numericValue).toFixed(2);

    // Update the input element with the formatted value
    this.el.nativeElement.value = formattedValue;
  }
}
