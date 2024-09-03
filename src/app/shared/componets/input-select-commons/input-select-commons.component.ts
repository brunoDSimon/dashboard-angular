import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-select-commons',
  standalone: true,
  imports: [ReactiveFormsModule, NgbTooltipModule,CommonModule],
  templateUrl: './input-select-commons.component.html',
  styleUrl: './input-select-commons.component.scss'
})
export class InputSelectCommonsComponent {
  @Input() formGroup!: FormGroup;
  @Input() control!: string;
  @Input() required: boolean = false;
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() options: { value: string, label: string }[] = [];
  @Input() toltip: string = '';

  get controlValue(): FormControl {
    return this.formGroup.get(this.control) as FormControl;
  }
}
