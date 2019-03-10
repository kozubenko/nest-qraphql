import { Resolver, Query, Args, Mutation  } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from '../../graphql.schema';
import { CreateUserDto } from './dto/CreateUser.dto';

@Resolver('User')
export class UsersResolvers {
  constructor(
    private readonly usersService: UsersService,
  ) {
  }

  @Mutation('createUser')
  async createUser(@Args('create') args: CreateUserDto): Promise<User>  {
    return await this.usersService.create(args);
  }

  @Query('getUser')
  async getUser(@Args('id') id: number) {
    return await this.usersService.find(id);
  }

  @Query('getUsers')
  async getUsers() {
    return await this.usersService.findAll();
  }
}
