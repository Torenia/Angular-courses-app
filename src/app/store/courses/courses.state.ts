import { CourseItem } from '../../models/course-item';
import { Author } from '../../models/author';

export interface CoursesState {
  readonly courses: CourseItem[];
  readonly course: CourseItem;
  readonly authors: Author[];
}

export const initialCoursesState: CoursesState = {
  courses: [],
  course: null,
  authors: []
};
