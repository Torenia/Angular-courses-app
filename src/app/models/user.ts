import { IUser } from './user-interface';

export class User implements IUser {
  constructor(public id: number,
              public token: string,
              public name: {
                firstName: string,
                lastName: string
              },
              public login: string,
              public password: string
  ) {
  }
}
