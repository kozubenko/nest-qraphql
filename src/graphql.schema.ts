/* tslint:disable */
export abstract class IQuery {
    abstract user(id: number): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class User {
    id: number;
    firstName?: string;
    lastName?: string;
}
