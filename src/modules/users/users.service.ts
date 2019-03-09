import { Injectable } from '@nestjs/common';
import { User } from '../graphql.schema';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, firstName: 'Author', lastName: 'Author' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: number): User {
    return this.users.find(user => user.id === id);
  }
}
