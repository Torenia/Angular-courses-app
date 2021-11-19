import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourseItemComponent } from './course-item.component';
import { CourseBorderColorDirective } from '../../shared/CourseBorder.directive';
import { TimeDurationPipe } from '../../shared/pipes/time-duration/time-duration.pipe';
import { OrderByPipe } from '../../shared/pipes/order-by/order-by.pipe';
import { AddCoursePageComponent } from '../../add-course-page/add-course-page.component';
import { ChangeDetectionStrategy } from '@angular/core';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  const appRoutes: Routes = [
    { path: 'courses/:id', component: AddCoursePageComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [
        CourseItemComponent,
        TimeDurationPipe,
        OrderByPipe,
        CourseBorderColorDirective,
        AddCoursePageComponent
      ]
    })
      .overrideComponent(CourseItemComponent, {
        set: {  changeDetection: ChangeDetectionStrategy.Default  }
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
