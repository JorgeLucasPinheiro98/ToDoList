test("deve criar um post", async () => {
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

    const data = await response.json()
    console.log(data)

    expect(response.status).toBe(201)
})