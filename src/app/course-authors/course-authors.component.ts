import { Component, OnInit, ElementRef, ViewChild, forwardRef } from '@angular/core';
import { Author } from '../models/author';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CoursesState, getAuthors, GetAuthors } from '../store';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { map } from 'rxjs/operators';
import { MatChipList } from '@angular/material';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { FormControl, ControlValueAccessor, Validator, NG_VALUE_ACCESSOR, NG_VALIDATORS,
         FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseAuthorsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CourseAuthorsComponent),
      multi: true
    },
  ]
})

export class CourseAuthorsComponent implements OnInit, ControlValueAccessor, Validator {
  courseAuthors: Author[] = [];
  allAuthors: Author[] = [];
  authorsList: Author[];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectable = true;
  removable = true;
  addOnBlur = false;
  authors = new FormControl([]);
  private courseSubscription: Subscription;

  @ViewChild('authorsInput', { static: false }) authorsInput: ElementRef<HTMLInputElement>;
  @ViewChild('courseAuthorsList', { static: false }) courseAuthorsList: MatChipList;

  onChange = () => { };
  onTouched = () => { };

  constructor(
    private controlContainer: FormGroupDirective,
    private coursesStore: Store<CoursesState>,
  ) { }

  ngOnInit() {
    this.courseSubscription = new Subscription();

    this.courseSubscription.add(this.coursesStore.select(getAuthors)
      .subscribe(authors => {
        this.allAuthors = authors;
      }));

    this.coursesStore.dispatch(new GetAuthors());

    this.authors.valueChanges
      .pipe(
        map((enteredLetters) => {
          if (enteredLetters) {
            return this.allAuthors.filter(authors => authors.name.startsWith(enteredLetters.trim().toUpperCase()));
          } else {
            return this.allAuthors;
          }
        }),
        map(authors => this.courseAuthors
          ? authors.filter(author => !this.courseAuthors.find(dublicatedAuthor => author.id === dublicatedAuthor.id))
          : authors)
      )
      .subscribe(authors => this.authorsList = authors);

    this.controlContainer.statusChanges.subscribe(() => this.errors());
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (value) {
      const selectedAuthor = this.allAuthors.find(author => author.name.toUpperCase());

      if (selectedAuthor) {
        this.courseAuthors = this.courseAuthors.concat(selectedAuthor);
        this.onChange();
      }
    }

    if (input) {
      input.value = '';
    }
  }

  remove(author: Author): void {
    this.courseAuthors = this.courseAuthors.filter(courseAuthor => !(courseAuthor.id === author.id));
    this.onChange();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const { value } = event.option;
    const author = this.allAuthors.find(courseAuthor => courseAuthor.id === value);

    this.courseAuthors = this.courseAuthors.concat(author);
    this.onChange();

    this.authorsInput.nativeElement.value = '';
  }

  writeValue(value) {
    this.courseAuthors = value;
  }

  registerOnChange(fn) {
    this.onChange = () => {
      fn(this.courseAuthors);
    };
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  errors() {
    if (!this.courseAuthors.length) {
      this.authors.setErrors({ required: true });
    } else {
      this.authors.setErrors(null);
    }

    if (this.authors.errors) {
      this.courseAuthorsList.errorState = true;
    } else {
      this.courseAuthorsList.errorState = false;
    }
  }

  validate() {
    return this.authors.errors;
  }
}

