import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCoursePageComponent } from './add-course-page.component';
import { TimeDurationPipe } from '../shared/pipes/time-duration/time-duration.pipe';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';
import { AppRoutingModule } from '../app-routing.module';
import { CoursePageComponent } from '../course-page/course-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { CourseItemComponent } from '../course-page/course-item/course-item.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { SearchComponent } from '../course-page/search/search.component';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { CourseBorderColorDirective } from '../shared/CourseBorder.directive';

describe('AddCoursePageComponent', () => {
  let component: AddCoursePageComponent;
  let fixture: ComponentFixture<AddCoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      declarations: [
        AddCoursePageComponent,
        TimeDurationPipe,
        FilterPipe,
        CoursePageComponent,
        LoginPageComponent,
        CourseItemComponent,
        NotFoundPageComponent,
        SearchComponent,
        OrderByPipe,
        CourseBorderColorDirective
      ],
      providers: [FilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
