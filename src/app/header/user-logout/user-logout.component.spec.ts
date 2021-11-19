import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserLogoutComponent } from './user-logout.component';
import { RouterModule, Routes } from '@angular/router';
import { CoursePageComponent } from '../../course-page/course-page.component';
import { SearchComponent } from '../../course-page/search/search.component';
import { OrderByPipe } from '../../shared/pipes/order-by/order-by.pipe';
import { CourseItemComponent } from '../../course-page/course-item/course-item.component';
import { TimeDurationPipe } from '../../shared/pipes/time-duration/time-duration.pipe';
import { FilterPipe } from '../../shared/pipes/filter/filter.pipe';
import { CourseBorderColorDirective } from '../../shared/CourseBorder.directive';

describe('UserLogoutComponent', () => {
  let component: UserLogoutComponent;
  let fixture: ComponentFixture<UserLogoutComponent>;

  const appRoutes: Routes = [
    { path: 'courses', component: CoursePageComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterModule,
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [
        UserLogoutComponent,
        CoursePageComponent,
        SearchComponent,
        OrderByPipe,
        CourseItemComponent,
        TimeDurationPipe,
        FilterPipe,
        CourseBorderColorDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
