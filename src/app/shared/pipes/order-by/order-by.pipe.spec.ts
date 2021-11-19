import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return ordered array by date', () => {
    const courseItems = [
      {
        id: 1,
        title: 'Video Course 1. First',
        creationDate: new Date(2019, 11, 12),
        duration: 88,
        description: 'Test',
        topRated: true,
      },
      {
        id: 2,
        title: 'Video Course 2. Second',
        creationDate: new Date(2019, 9, 5),
        duration: 88,
        description: 'Test',
        topRated: true,
      }
    ];
    const orderedItems = [
      {
        id: 2,
        title: 'Video Course 2. Second',
        creationDate: new Date(2019, 9, 5),
        duration: 88,
        description: 'Test',
        topRated: true,
      },
      {
        id: 1,
        title: 'Video Course 1. First',
        creationDate: new Date(2019, 11, 12),
        duration: 88,
        description: 'Test',
        topRated: true,
      }
    ];
    const pipe = new OrderByPipe();

    expect(pipe.transform(courseItems)).toEqual(orderedItems);
  });
});
