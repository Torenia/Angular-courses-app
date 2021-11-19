import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../../models/course-item';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: CourseItem[]) {
    return value.sort((a: CourseItem, b: CourseItem) => new Date(a.date).getTime() -  new Date(b.date).getTime());
  }
}
