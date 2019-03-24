import { Resolver, Query, Args  } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/auth.guard';

@Resolver('User')
export class UsersResolvers {
  constructor(
    private readonly usersService: UsersService,
  ) {
  }

  @Query('user')
  async getUser(@Args('id') id: number) {
    return await this.usersService.find(id);
  }

  @Query('users')
  @UseGuards(new GqlAuthGuard())
  async getUsers() {
    return await this.usersService.findAll();
  }
}
