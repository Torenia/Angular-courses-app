import { CoursesActionTypes, CoursesActions } from './courses.actions';
import { CoursesState, initialCoursesState } from './courses.state';

export function coursesReducer(
  state = initialCoursesState,
  action: CoursesActions,
): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.GET_COURSES:
      return {
        ...state
      };

    case CoursesActionTypes.GET_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload
      };

    case CoursesActionTypes.GET_COURSES_ERROR:
      return {
        ...state
      };

    case CoursesActionTypes.GET_COURSE:
      return {
        ...state
      };

    case CoursesActionTypes.GET_COURSE_SUCCESS:
      return {
        ...state,
        course: action.payload
      };

    case CoursesActionTypes.GET_COURSE_ERROR:
      return {
        ...state
      };

    case CoursesActionTypes.CREATE_COURSE:
      return {
        ...state
      };

    case CoursesActionTypes.CREATE_COURSE_SUCCESS:
      return {
        ...state
      };

    case CoursesActionTypes.CREATE_COURSE_ERROR:
      return {
        ...state
      };

    case CoursesActionTypes.UPDATE_COURSE:
      return {
        ...state
      };

    case CoursesActionTypes.UPDATE_COURSE_SUCCESS:
      return {
        ...state
      };

    case CoursesActionTypes.UPDATE_COURSE_ERROR:
      return {
        ...state
      };

    case CoursesActionTypes.DELETE_COURSE:
      return {
        ...state
      };

    case CoursesActionTypes.DELETE_COURSE_SUCCESS:
      return {
        ...state
      };

    case CoursesActionTypes.DELETE_COURSE_ERROR:
      return {
        ...state
      };

    default: {
      return state;
    }
    case CoursesActionTypes.GET_AUTHORS:
      return {
        ...state
      };

    case CoursesActionTypes.GET_AUTHORS_SUCCESS:
      return {
        ...state,
        authors: action.payload
      };

    case CoursesActionTypes.GET_AUTHORS_ERROR:
      return {
        ...state
      };
  }
}
