import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() options: any[] = [];
  @Output() selectedOptionsChange = new EventEmitter<any[]>();

  selectedOptions: any[] = [];
  filteredOptions: any[] = [];

  onInputChange(event: Event) {
    const searchInput = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredOptions = this.options.filter(option =>
      option.name.toLowerCase().includes(searchInput)
    );
  }

  toggleSelection(option: any) {
    if (this.isSelected(option)) {
      this.selectedOptions = this.selectedOptions.filter(selected => selected.id !== option.id);
    } else {
      this.selectedOptions.push(option);
    }

    this.selectedOptionsChange.emit(this.selectedOptions);
  }

  isSelected(option: any): boolean {
    return this.selectedOptions.some(selected => selected.id === option.id);
  }
}
