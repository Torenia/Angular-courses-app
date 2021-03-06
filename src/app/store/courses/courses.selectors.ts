import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.state';

export const getCoursesState = createFeatureSelector<CoursesState>('courses');

export const getCourses = createSelector(getCoursesState, (state: CoursesState) => state.courses);
export const getCourse = createSelector(getCoursesState, (state: CoursesState) => state.course);
export const getAuthors = createSelector(getCoursesState, (state: CoursesState) => state.authors);

