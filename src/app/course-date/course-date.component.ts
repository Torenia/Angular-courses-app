import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, Validators, ControlValueAccessor, Validator } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CourseDateComponent,
      multi: true
    },
  ]
})

export class CourseDateComponent implements OnInit, ControlValueAccessor, Validator {
  date: FormControl;
  onChange: (value) => { };
  onTouched = () => { };

  constructor() { }

  ngOnInit() {
  }

  writeValue(value) {
    if (value) {
    this.date = new FormControl(
      moment(value).format('DD/MM/YYYY'),
      [Validators.required,
      Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]
      );
    } else {
      this.date = new FormControl('',
        [Validators.required,
        Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]
        );
    }
  }

  registerOnChange(fn) {
    this.onChange = () => fn(this.date.value);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate() {
    return this.date.errors;
  }
}
