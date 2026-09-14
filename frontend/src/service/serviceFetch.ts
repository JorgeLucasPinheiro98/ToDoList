type IUser = {
    userName: string
    email: string
    password: string
}

type ILogin = {
    userName: string
    password: string
}

export class ServiceFetch {
    connection: string

    constructor() {
        this.connection = "http://localhost:3000/"
    }

    async getUsers() {
        const response = await fetch(`${this.connection}users`);
        const users = response.json()
        return users
    }

    async postUser(data:IUser) {
        await fetch(`${this.connection}users`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
    }

    async postLogin(data:ILogin) {
        const response = await fetch(`${this.connection}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return response.status
    }
}