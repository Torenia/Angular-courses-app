import { ICourseItem } from './course-item-interface';

export class CourseItem implements ICourseItem {
  constructor(public id: number = null,
              public name: string = null,
              public date: string = null,
              public length: number = null,
              public description: string = null,
              public isTopRated: boolean = null,
              public authors: [] = []
  ) {
  }
}
