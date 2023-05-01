import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CourseBorderColorDirective } from './shared/CourseBorder.directive';
import { TimeDurationPipe } from './shared/pipes/time-duration/time-duration.pipe';
import { OrderByPipe } from './shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from './shared/pipes/filter/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalConfirmationComponent } from './dialogs/modal-confirmation/modal-confirmation.component';
import { MatDialogModule, MatButtonModule, MatAutocompleteModule,
        MatFormFieldModule, MatChipsModule, MatIconModule,
        MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthorizationService } from './services/authorization/authorization.service';
import { AuthInterceptor } from './services/authorization/authorization.interceptor';
import { LoadingBlockComponent } from './loading-block/loading-block.component';
import { LoaderInterceptorService } from './loading-block/loader.interceptor';
import { LoaderService } from './loading-block/loading-block.service';
import { AppStoreModule } from './store';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    CoursePageComponent,
    FooterComponent,
    LogoComponent,
    SearchComponent,
    CourseItemComponent,
    UserLoginComponent,
    UserLogoutComponent,
    CourseBorderColorDirective,
    TimeDurationPipe,
    OrderByPipe,
    FilterPipe,
    ModalConfirmationComponent,
    LoginPageComponent,
    AddCoursePageComponent,
    NotFoundPageComponent,
    LoadingBlockComponent,
    CourseDurationComponent,
    CourseDateComponent,
    CourseAuthorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppStoreModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule
  ],
  entryComponents: [
    ModalConfirmationComponent
  ],
  providers: [
    FilterPipe,
    AuthorizationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
