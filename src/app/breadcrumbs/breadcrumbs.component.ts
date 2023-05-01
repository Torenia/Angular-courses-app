import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivationStart } from '@angular/router';
import { distinctUntilChanged, filter, pluck, tap } from 'rxjs/operators';
import { CourseItem } from '../models/course-item';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  isNewCoursePageActive = false;
  isEditCoursePageActive = false;
  item: CourseItem;

  constructor(
    public router: Router,
    private cd: ChangeDetectorRef,
    private coursesService: CoursesService
  ) {
  }

  ngOnInit() {
    this.renderBreadcrumbs();
  }

  private renderBreadcrumbs() {
    this.router.events
      .pipe(
        filter(event => event instanceof ActivationStart),
        pluck('snapshot'),
        pluck('params'),
        pluck('id'),
        distinctUntilChanged(),
        tap((id) => {
          this.coursesService.getItemById(Number(id))
            .subscribe((item) => {
              this.item = item;
              this.isEditCoursePageActive = !!id;
              const destroyed = 'destroyed';
              if (!this.cd[destroyed]) {
                this.cd.detectChanges();
              }
            });
        })
      )
      .subscribe();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        pluck('url'),
        distinctUntilChanged(),
        tap((url) => {
          this.isNewCoursePageActive = url === '/courses/new';
          const destroyed = 'destroyed';
          if (!this.cd[destroyed]) {
            this.cd.detectChanges();
          }
        })
      )
      .subscribe();
  }
}
