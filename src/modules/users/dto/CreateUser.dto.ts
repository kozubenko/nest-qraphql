import { Length } from 'class-validator';
import { CreateUserInput } from '../../../graphql.schema';

export class CreateUserDto extends CreateUserInput {
  @Length(5, 20)
  firstName: string;

  @Length(5, 20)
  lastName: string;

  @Length(5, 20)
  password: string;
}
