import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { CoursePageComponent } from './course-page.component';
import { SearchComponent } from './search/search.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseBorderColorDirective } from '../shared/CourseBorder.directive';
import { TimeDurationPipe } from '../shared/pipes/time-duration/time-duration.pipe';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from '../shared/pipes/filter/filter.pipe';
import { AddCoursePageComponent } from '../add-course-page/add-course-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalConfirmationComponent } from '../dialogs/modal-confirmation/modal-confirmation.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('CoursePageComponent', () => {
  let component: CoursePageComponent;
  let fixture: ComponentFixture<CoursePageComponent>;
  const filterPipe = new FilterPipe();

  const appRoutes: Routes = [
    { path: 'courses/new', component: AddCoursePageComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        RouterModule,
        RouterModule.forRoot(appRoutes)
      ],
      declarations: [
        CoursePageComponent,
        SearchComponent,
        CourseItemComponent,
        OrderByPipe,
        TimeDurationPipe,
        FilterPipe,
        CourseBorderColorDirective,
        AddCoursePageComponent,
        ModalConfirmationComponent
      ],
      providers: [FilterPipe]
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: { entryComponents: [ModalConfirmationComponent] }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    spyOn(console, 'log');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print course items to console', () => {
    component.loadMoreItems();
    expect(console.log).toHaveBeenCalledWith(component.courseItems);
  });
});
