import { TestBed, async } from '@angular/core/testing';
import { FilterPipe } from '../../shared/pipes/filter/filter.pipe';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterPipe
      ],
      providers: [FilterPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });
});
