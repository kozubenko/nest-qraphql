/* tslint:disable */
export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export abstract class IMutation {
    abstract createUser(create?: CreateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract getUser(id: number): User | Promise<User>;

    abstract getUsers(): User[] | Promise<User[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    id: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    createdAt: string;
    updatedAt: string;
}
