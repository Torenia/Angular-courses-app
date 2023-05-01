import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseItem } from '../models/course-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { GetCourse, CreateCourse, UpdateCourse, CoursesState, getCourse } from '../store/courses';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCoursePageComponent implements OnInit {
  item = new CourseItem();
  id: number;
  private subscription: Subscription;
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    length: new FormControl(0),
    date: new FormControl(''),
    authors: new FormControl([]),
  });

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private coursesStore: Store<CoursesState>
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.subscription = new Subscription();

    if (this.id) {
      this.subscription.add(this.coursesStore.select(getCourse)
        .subscribe(item => {
          this.item = item;
          if (this.item !== null) {
            this.form.setValue({
              name: this.item.name,
              description: this.item.description,
              length: this.item.length,
              date: this.item.date,
              authors: this.item.authors
            });
          }
          const destroyed = 'destroyed';
          if (!this.cd[destroyed]) {
            this.cd.detectChanges();
          }
        }));

      this.coursesStore.dispatch(new GetCourse(this.id));
    }
  }

  save(): void {
    const courseItem = this.item.id ? Object.assign({ }, this.item, this.form.value) : this.form.value;
    this.item.id === null
      ? this.coursesStore.dispatch(new CreateCourse(courseItem))
      : this.coursesStore.dispatch(new UpdateCourse(courseItem));
  }
}
