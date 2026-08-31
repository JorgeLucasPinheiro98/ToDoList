interface IUserCase {
    CreateUser(): Promise<void>;
    DeleteUser(): Promise<void>;
}

export class RegisterUserCase implements IUserCase{
    constructor() {

    }
    CreateUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    DeleteUser(): Promise<void> {
        throw new Error("Method not implemented.");
    }


}