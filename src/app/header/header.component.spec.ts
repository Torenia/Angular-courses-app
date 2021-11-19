import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { CoursePageComponent } from '../course-page/course-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { SearchComponent } from '../course-page/search/search.component';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { CourseItemComponent } from '../course-page/course-item/course-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseBorderColorDirective } from '../shared/CourseBorder.directive';
import { TimeDurationPipe } from '../shared/pipes/time-duration/time-duration.pipe';
import { AddCoursePageComponent } from '../add-course-page/add-course-page.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        HeaderComponent,
        LogoComponent,
        UserLoginComponent,
        UserLogoutComponent,
        CoursePageComponent,
        LoginPageComponent,
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
