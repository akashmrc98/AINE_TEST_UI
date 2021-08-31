import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  inputs: string[] = [];
  @Input() name: string;

  @Output() newItemsList = new EventEmitter<String[]>();

  inputForm: FormGroup = new FormGroup({
    input: new FormControl(null, [Validators.required]),
  });

  add() {
    if (this.inputForm.valid) {
      const newInputs: string[] = this.inputs;
      newInputs.push(this.inputForm.get('input').value);
      this.inputs = newInputs;
      this.inputForm.reset();
      this.newItemsList.emit(this.inputs);
    }
  }

  remove(index: number) {
    const newInputs: string[] = this.inputs;
    newInputs.splice(index, 1);
    this.inputs = newInputs;
  }
}
