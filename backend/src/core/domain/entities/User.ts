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
        if(!this.name) throw new Error("Invalid Name");

        if(!this.email) throw new Error("Invalid Email");

        if(!this.password) throw new Error("Invalid Password")
    }
}