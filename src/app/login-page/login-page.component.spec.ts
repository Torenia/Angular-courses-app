import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { LoginPageComponent } from './login-page.component';
import { CoursePageComponent } from '../course-page/course-page.component';
import { SearchComponent } from '../course-page/search/search.component';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { CourseItemComponent } from '../course-page/course-item/course-item.component';
import { CourseBorderColorDirective } from '../shared/CourseBorder.directive';
import { TimeDurationPipe } from '../shared/pipes/time-duration/time-duration.pipe';
import { AddCoursePageComponent } from '../add-course-page/add-course-page.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule
      ],
      declarations: [
        LoginPageComponent,
        CoursePageComponent,
        SearchComponent,
        OrderByPipe,
        CourseItemComponent,
        CourseBorderColorDirective,
        TimeDurationPipe,
        AddCoursePageComponent,
        NotFoundPageComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
