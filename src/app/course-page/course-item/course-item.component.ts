import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CourseItem } from '../../models/course-item';

@Component({
  selector: 'app-course-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() item: CourseItem;
  @Output() clickDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  openModal(itemId: number) {
    this.clickDelete.emit(itemId);
  }
}
