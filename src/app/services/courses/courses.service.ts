import { Injectable } from '@angular/core';
import { CourseItem } from '../../models/course-item';
import { Author } from '../../models/author';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  item = CourseItem;
  itemsArray: CourseItem[];
  private readonly coursesUrl = 'http://localhost:3004/courses';
  private readonly authorsUrl = 'http://localhost:3004/authors';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCourses(): Observable<CourseItem[]> {
    return this.httpClient.get<CourseItem[]>(this.coursesUrl);
  }

  deleteCourse(itemId: number): Observable<CourseItem> {
    const url = `${this.coursesUrl}/${itemId}`;
    return this.httpClient.delete<CourseItem>(url, httpOptions);
  }

  getItemById(id: number): Observable<CourseItem> {
    return this.getCourses().pipe(map(data => {
      this.itemsArray = data.filter((selectedItem) => selectedItem.id === id);
      return this.itemsArray[0];
    }));
  }

  updateItem(item: CourseItem): Observable<object> {
    const url = `${this.coursesUrl}/${item.id}`;
    return this.httpClient.patch(url, item, httpOptions);
  }

  saveItem(item: CourseItem): Observable<CourseItem> {
    return this.httpClient.post<CourseItem>(this.coursesUrl, item, httpOptions);
  }

  getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(this.authorsUrl);
  }
}
