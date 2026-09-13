import type { IUser } from "../src/server.ts"

test("deve criar um Usuario", async () => {
    const user = {
        userName: "testuser",
        email: "test@example.com",
        password: "123",
    }

    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })

    const data: IUser | any = await response.json()

    expect(response.status).toBe(201)
    expect(data.userName).toBe(user.userName)
    expect(data.email).toBe(user.email)
})

test("deve fazer um Login", async () => {
    const userLogin = {
        userName: "testuser",
        password: "123",
    }

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userLogin)
    })

    const data = await response.json()
    console.log(data)

    expect(response.status).toBe(200)
})