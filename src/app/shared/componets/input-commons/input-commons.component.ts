import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskDirective, CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
  selector: 'app-input-commons',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbTooltipModule,CurrencyMaskModule, CurrencyPipe],
  templateUrl: './input-commons.component.html',
  styleUrls: ['./input-commons.component.scss'],
})
export class InputCommonsComponent {
  @Input() formGroup!: FormGroup;
  @Input() control!: string;
  @Input() required: boolean = false;
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() exibirLength: boolean = false;
  @Input() maxlength: number = 0;
  
  get controlValue(): FormControl {
    return this.formGroup.get(this.control) as FormControl;
  }

  
}
