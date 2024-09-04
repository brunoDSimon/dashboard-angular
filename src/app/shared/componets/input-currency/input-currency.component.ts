import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
  selector: 'app-input-currency',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbTooltipModule, CurrencyMaskModule, CurrencyPipe],
  templateUrl: './input-currency.component.html',
  styleUrl: './input-currency.component.scss',
})
export class InputCurrencyComponent {
  @Input() formGroup!: FormGroup;
  @Input() control!: string;
  @Input() required: boolean = false;
  @Input() type: string = 'text';  // Ensure this is 'text' for currency input
  @Input() label: string = '';
  @Input() exibirLength: boolean = false;
  @Input() maxlength: number = 0;
  
  get controlValue(): FormControl {
    return this.formGroup.get(this.control) as FormControl;
  }
}
