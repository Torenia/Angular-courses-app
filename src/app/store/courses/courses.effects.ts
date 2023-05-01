import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoursesActionTypes } from './courses.actions';
import * as CoursesActions from './courses.actions';

import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import { CoursesService } from '../../services/courses/courses.service';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router,
  ) { }

  @Effect()
  getCourses$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActionTypes.GET_COURSES),
    switchMap(() =>
      this.coursesService.getCourses()
        .pipe(
          map((res: any) => new CoursesActions.GetCoursesSuccess(res)),
          catchError(err => of(new CoursesActions.GetCoursesError(err))),
        ),
    ),
  );

  @Effect()
  deleteCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.DeleteCourse>(CoursesActionTypes.DELETE_COURSE),
    switchMap(({ payload }) =>
      this.coursesService.deleteCourse(payload)
        .pipe(
          map(() => new CoursesActions.DeleteCourseSuccess()),
          catchError(err => of(new CoursesActions.DeleteCourseError(err))),
        ),
    ),
  );

  @Effect()
  deleteCourseSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.DeleteCourseSuccess>(CoursesActionTypes.DELETE_COURSE_SUCCESS),
    map(() => new CoursesActions.GetCourses()));

  @Effect()
  getCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.GetCourse>(CoursesActionTypes.GET_COURSE),
    switchMap(({ payload: id }) =>
      this.coursesService.getItemById(id)
        .pipe(
          map((res: any) => new CoursesActions.GetCourseSuccess(res)),
          catchError(err => of(new CoursesActions.GetCourseError(err))),
        ),
    ),
  );

  @Effect()
  createCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.CreateCourse>(CoursesActionTypes.CREATE_COURSE),
    switchMap(({ payload }) =>
      this.coursesService.saveItem(payload)
        .pipe(
          map(() => new CoursesActions.CreateCourseSuccess()),
          catchError(err => of(new CoursesActions.CreateCourseError(err))),
        ),
    ),
  );

  @Effect()
  updateCourse$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.UpdateCourse>(CoursesActionTypes.UPDATE_COURSE),
    switchMap(({ payload }) =>
      this.coursesService.updateItem(payload)
        .pipe(
          map(() => new CoursesActions.UpdateCourseSuccess()),
          catchError(err => of(new CoursesActions.UpdateCourseError(err))),
        ),
    ),
  );

  @Effect({ dispatch: false })
  createCourseSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.CreateCourseSuccess>(CoursesActionTypes.CREATE_COURSE_SUCCESS),
    tap(() => {
      this.router.navigate(['/courses']);
    })
  );

  @Effect({ dispatch: false })
  updateCourseSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<CoursesActions.UpdateCourseSuccess>(CoursesActionTypes.UPDATE_COURSE_SUCCESS),
    tap(() => {
      this.router.navigate(['/courses']);
    })
  );

  @Effect()
  getAuthors$: Observable<Action> = this.actions$.pipe(
    ofType(CoursesActionTypes.GET_AUTHORS),
    switchMap(() =>
      this.coursesService.getAuthors()
        .pipe(
          map((res: any) => new CoursesActions.GetAuthorsSuccess(res)),
          catchError(err => of(new CoursesActions.GetAuthorsError(err))),
        ),
    ),
  );
}
