type IUser = {
    userName: string
    email: string
    password: string
}

export class ServiceFetch {
    connection: string

    constructor() {
        this.connection = "http://localhost:3000/users"
    }

    async getUsers() {
        const response = await fetch(this.connection);
        const users = response.json()
        return users
    }

    async postUser(data:IUser) {
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
    }
}