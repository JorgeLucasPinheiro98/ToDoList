import type { User } from "../../domain/entities/User.ts";

interface IUserCase {
    SaveUser(): Promise<void>;
    DeleteUser(): Promise<void>;
    GetUserById(): Promise<User>
    GetUsers(): Promise<User[]>
}

export class RegisterUserCase implements IUserCase{
    constructor() {

    }
    GetUsers(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    GetUserById(): Promise<User> {
        throw new Error("Method not implemented.");
    }

    SaveUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }


}