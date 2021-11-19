import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddCoursePageComponent } from './add-course-page/add-course-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'courses', component: CoursePageComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full'},
  { path: 'login-page', component: LoginPageComponent },
  { path: 'courses/new', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: AddCoursePageComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})

export class AppRoutingModule { }
