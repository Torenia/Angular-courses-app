import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array if no data entered', () => {
    const pipe = new FilterPipe();
    expect(pipe.transform(null, 'null')).toEqual([]);
  });

  it('should return full array if no text entered', () => {
    const courseItems = [
      {
        id: 1,
        title: 'Video Course 1. First',
        creationDate: new Date(),
        duration: 88,
        description: 'Test',
        topRated: true,
      },
      {
        id: 2,
        title: 'Video Course 2. Second',
        creationDate: new Date(),
        duration: 88,
        description: 'Test',
        topRated: true,
      }
    ];

    const pipe = new FilterPipe();
    expect(pipe.transform(courseItems, null)).toEqual(courseItems);
  });

  it('should return array with searched word', () => {
    const courseItems = [
      {
        id: 1,
        title: 'Video Course 1. First',
        creationDate: new Date(),
        duration: 88,
        description: 'Test',
        topRated: true,
      },
      {
        id: 2,
        title: 'Video Course 2. Second',
        creationDate: new Date(),
        duration: 88,
        description: 'Test',
        topRated: true,
      }
    ];
    const filteredItems = [
      {
        id: 1,
        title: 'Video Course 1. First',
        creationDate: new Date(),
        duration: 88,
        description: 'Test',
        topRated: true,
      }
    ];
    const pipe = new FilterPipe();

    expect(pipe.transform(courseItems, 'first')).toEqual(filteredItems);
  });
});
