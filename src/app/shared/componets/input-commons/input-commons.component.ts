import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-commons',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input-commons.component.html',
  styleUrl: './input-commons.component.scss'
})
export class InputCommonsComponent {
  @Input() formGroup!: FormGroup;
  @Input() control!: string;
  @Input() required: boolean = false;
  @Input() type: string = 'text';

  get controlValue(): FormControl {
    return this.formGroup.get(this.control) as FormControl;
  }
  
}
