import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbsComponent } from './breadcrumbs.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoursePageComponent } from '../course-page/course-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { AddCoursePageComponent } from '../add-course-page/add-course-page.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { SearchComponent } from '../course-page/search/search.component';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { CourseItemComponent } from '../course-page/course-item/course-item.component';
import { TimeDurationPipe } from '../shared/pipes/time-duration/time-duration.pipe';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';
import { CourseBorderColorDirective } from '../shared/CourseBorder.directive';
import { ChangeDetectionStrategy } from '@angular/core';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        BreadcrumbsComponent,
        CoursePageComponent,
        LoginPageComponent,
        AddCoursePageComponent,
        NotFoundPageComponent,
        SearchComponent,
        OrderByPipe,
        CourseItemComponent,
        TimeDurationPipe,
        FilterPipe,
        CourseBorderColorDirective
      ],
      providers: [FilterPipe]
    })
      .overrideComponent(BreadcrumbsComponent, {
      set: {  changeDetection: ChangeDetectionStrategy.Default  }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
