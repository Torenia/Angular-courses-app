import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseBorderColorDirective } from './CourseBorder.directive';

@Component({
  template: `<div appCourseBorderColor [creationDate]="item.creationDate">Course Item</div>`
})

class MockCourseItemComponent {
  item = { creationDate : new Date() };
}

describe('CourseBorderColorDirective', () => {
  let component: MockCourseItemComponent;
  let fixture: ComponentFixture<MockCourseItemComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockCourseItemComponent, CourseBorderColorDirective]
    });
    fixture = TestBed.createComponent(MockCourseItemComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('div'));
  });

  it('should change border color to blue', () => {
    component.item.creationDate = new Date(Date.now() + 6048e5);
    fixture.detectChanges();
    expect(el.nativeElement.classList.toString()).toBe('blue');
  });

  it('should change border color to green', () => {
    component.item.creationDate = new Date(Date.now() - 12096e5);
    fixture.detectChanges();
    expect(el.nativeElement.classList.toString()).toBe('green');
  });
});
