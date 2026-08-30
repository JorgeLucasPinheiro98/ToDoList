interface IUser {
    id: string
    name: string
    email: string
    password: string
}

export class User implements IUser{
    id: string
    name: string
    email: string
    password: string
    
    constructor(name: string, email: string, password: string) {
        this.id = crypto.randomUUID();
        this.name = name
        this.email = email
        this.password = password
    }

    async validate() {
        if(this.name.length < 4) throw new Error("Invalid Name");
    }
}