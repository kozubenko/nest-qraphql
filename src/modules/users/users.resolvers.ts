import { Resolver, Query, Args  } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolvers {
  constructor(
    private readonly usersService: UsersService,
  ) {
  }

  @Query('user')
  async getUser(@Args('id') id: number) {
    return await this.usersService.findOneById(id);
  }

  @Query('users')
  async getUsers() {
    return await this.usersService.findAll();
  }
}
