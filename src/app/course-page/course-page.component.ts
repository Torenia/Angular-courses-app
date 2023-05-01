import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../models/course-item';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalConfirmationComponent } from '../dialogs/modal-confirmation/modal-confirmation.component';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';

import { CoursesState } from '../store/courses';
import { getCourses } from '../store/courses';
import { GetCourses, DeleteCourse } from '../store/courses';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  courseItems: CourseItem[] = [];
  loadCoursesStart = 0;
  loadCoursesEnd = 3;
  private subscriptionGetCourses: Subscription;
  private subscriptionSearch: Subscription;
  private subscriptionLoadMoreItems: Subscription;

  constructor(
    public dialog: MatDialog,
    private filter: FilterPipe,
    private coursesStore: Store<CoursesState>
  ) { }

  ngOnInit() {
    this.getCourses();
  }

  loadMoreItems(): void {
    this.subscriptionLoadMoreItems = new Subscription();

    this.subscriptionLoadMoreItems.add(this.coursesStore.select(getCourses)
      .subscribe(courses => {
        this.courseItems = courses.slice(this.loadCoursesStart, this.loadCoursesEnd);
      }));
    this.loadCoursesEnd += 3;

    this.coursesStore.dispatch(new GetCourses());
  }

  getCourses(): void {
    this.subscriptionGetCourses = new Subscription();

    this.subscriptionGetCourses.add(this.coursesStore.select(getCourses)
      .subscribe(courses => {
        this.courseItems = courses.slice(0, 3);
      }));

    this.coursesStore.dispatch(new GetCourses());
  }

  deleteItemFromList(itemId: number): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ModalConfirmationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.coursesStore.dispatch(new DeleteCourse(itemId));
      }
    });
  }

  filterDataBySearch(searchText: string): void {
    if (searchText) {
      this.subscriptionSearch = new Subscription();

      this.subscriptionSearch.add(this.coursesStore.select(getCourses)
        .subscribe(items => {
          this.courseItems = this.filter.transform(items, searchText);
        }));

      this.coursesStore.dispatch(new GetCourses());
    } else {
      this.getCourses();
    }
  }
}
