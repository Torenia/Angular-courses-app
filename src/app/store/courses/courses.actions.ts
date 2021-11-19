import { Action } from '@ngrx/store';
import { CourseItem } from '../../models/course-item';
import { Author } from '../../models/author';

export class CoursesActionTypes {
  static readonly GET_COURSES = '[Courses] GET_COURSES';
  static readonly GET_COURSES_SUCCESS = '[Courses] GET_COURSES_SUCCESS';
  static readonly GET_COURSES_ERROR = '[Courses] GET_COURSES_ERROR';
  static readonly GET_COURSE = '[Courses] GET_COURSE';
  static readonly GET_COURSE_SUCCESS = '[Courses] GET_COURSE_SUCCESS';
  static readonly GET_COURSE_ERROR = '[Courses] GET_COURSE_ERROR';
  static readonly CREATE_COURSE = '[Courses] CREATE_COURSE';
  static readonly CREATE_COURSE_SUCCESS = '[Courses] CREATE_COURSE_SUCCESS';
  static readonly CREATE_COURSE_ERROR = '[Courses] CREATE_COURSE_ERROR';
  static readonly UPDATE_COURSE = '[Courses] UPDATE_COURSE';
  static readonly UPDATE_COURSE_SUCCESS = '[Courses] UPDATE_COURSE_SUCCESS';
  static readonly UPDATE_COURSE_ERROR = '[Courses] UPDATE_COURSE_ERROR';
  static readonly DELETE_COURSE = '[Courses] DELETE_COURSE';
  static readonly DELETE_COURSE_SUCCESS = '[Courses] DELETE_COURSE_SUCCESS';
  static readonly DELETE_COURSE_ERROR = '[Courses] DELETE_COURSE_ERROR';
  static readonly GET_AUTHORS = '[Courses] GET_AUTHORS';
  static readonly GET_AUTHORS_SUCCESS = '[Courses] GET_AUTHORS_SUCCESS';
  static readonly GET_AUTHORS_ERROR = '[Courses] GET_COURSES_ERROR';
}

export class GetCourses implements Action {
  readonly type = CoursesActionTypes.GET_COURSES;
}

export class GetCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.GET_COURSES_SUCCESS;
  constructor(public payload: CourseItem[]) { }
}

export class GetCoursesError implements Action {
  readonly type = CoursesActionTypes.GET_COURSES_ERROR;
  constructor(public payload: Error | string) { }
}

export class GetCourse implements Action {
  readonly type = CoursesActionTypes.GET_COURSE;
  constructor(public payload: number) { }
}

export class GetCourseSuccess implements Action {
  readonly type = CoursesActionTypes.GET_COURSE_SUCCESS;
  constructor(public payload: CourseItem) { }
}

export class GetCourseError implements Action {
  readonly type = CoursesActionTypes.GET_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export class CreateCourse implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE;
  constructor(public payload: CourseItem) { }
}

export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE_SUCCESS;
}

export class CreateCourseError implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export class UpdateCourse implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE;
  constructor(public payload: CourseItem) { }
}

export class UpdateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_SUCCESS;
}

export class UpdateCourseError implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE;
  constructor(public payload: number) { }
}

export class DeleteCourseSuccess implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_SUCCESS;
}

export class DeleteCourseError implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_ERROR;
  constructor(public payload: Error | string) { }
}

export class GetAuthors implements Action {
  readonly type = CoursesActionTypes.GET_AUTHORS;
}

export class GetAuthorsSuccess implements Action {
  readonly type = CoursesActionTypes.GET_AUTHORS_SUCCESS;
  constructor(public payload: Author[]) { }
}

export class GetAuthorsError implements Action {
  readonly type = CoursesActionTypes.GET_AUTHORS_ERROR;
  constructor(public payload: Error | string) { }
}


export type CoursesActions
  = GetCourses
  | GetCoursesSuccess
  | GetCoursesError
  | GetCourse
  | GetCourseSuccess
  | GetCourseError
  | CreateCourse
  | CreateCourseSuccess
  | CreateCourseError
  | UpdateCourse
  | UpdateCourseSuccess
  | UpdateCourseError
  | DeleteCourse
  | DeleteCourseSuccess
  | DeleteCourseError
  | GetAuthors
  | GetAuthorsSuccess
  | GetAuthorsError;
