import { Component, OnInit, forwardRef } from '@angular/core';
import { FormControl,  Validators,  Validator, ControlValueAccessor, NG_VALUE_ACCESSOR,  NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CourseDurationComponent,
      multi: true
    },
  ]
})

export class CourseDurationComponent implements OnInit, ControlValueAccessor, Validator {
  length = new FormControl(0, [Validators.required, Validators.pattern(/^(?!(0))[0-9]+$/)]);
  onChange: (value) => { };
  onTouched = () => { };

  constructor() { }

  ngOnInit() {
  }

  writeValue(value) {
    this.length.setValue(value);
  }

  registerOnChange(fn) {
    this.onChange = () => fn(this.length.value);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate() {
    return this.length.errors;
  }
}
