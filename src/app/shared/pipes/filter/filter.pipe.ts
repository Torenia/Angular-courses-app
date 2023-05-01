import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../../models/course-item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: CourseItem[], searchText: string): CourseItem[] {
    if (!data) {
      return [];
    }
    if (!searchText) {
      return data;
    }

    return data.filter((item: CourseItem) => {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }
}
