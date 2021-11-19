import { IAuthor } from './author-interface';

export class Author implements IAuthor {
  constructor(public id: number = null,
              public name: string = null,
              public lastName: string = null,
  ) {
  }
}
