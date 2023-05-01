import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './course-page/search/search.component';
import { CourseItemComponent } from './course-page/course-item/course-item.component';
import { UserLoginComponent } from './header/user-login/user-login.component';
import { UserLogoutComponent } from './header/user-logout/user-logout.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeDurationPipe } from './shared/pipes/time-duration/time-duration.pipe';
import { OrderByPipe } from './shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from './shared/pipes/filter/filter.pipe';
import { CourseBorderColorDirective } from './shared/CourseBorder.directive';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalConfirmationComponent } from './dialogs/modal-confirmation/modal-confirmation.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        CoursePageComponent,
        FooterComponent,
        LogoComponent,
        UserLoginComponent,
        UserLogoutComponent,
        SearchComponent,
        CourseItemComponent,
        TimeDurationPipe,
        OrderByPipe,
        FilterPipe,
        CourseBorderColorDirective,
        LoginPageComponent,
        AddCoursePageComponent,
        NotFoundPageComponent,
        ModalConfirmationComponent
      ],
      providers: [FilterPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-mentoring-program'`, () => {
    expect(component.title).toEqual('angular-mentoring-program');
  });
});
