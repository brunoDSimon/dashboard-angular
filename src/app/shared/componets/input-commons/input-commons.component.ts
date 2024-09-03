import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-commons',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbTooltipModule],
  templateUrl: './input-commons.component.html',
  styleUrls: ['./input-commons.component.scss'],
})
export class InputCommonsComponent {
  @Input() formGroup!: FormGroup;
  @Input() control!: string;
  @Input() required: boolean = false;
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() exibirLength: boolean = false;
  @Input() maxlength: number = 0
  @Input() toltip: string = ''
  get controlValue(): FormControl {
    return this.formGroup.get(this.control) as FormControl;
  }
}
