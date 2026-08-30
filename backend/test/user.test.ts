import { User } from "../src/core/domain/entities/User.ts"

test("Deve criar um usuario", () => {
    const user = new User(
        "John Doe", 
        "john@email.com", 
        "ASDqwe123");
    expect(user).toBeDefined();
    expect(user.name).toBe("John Doe")
    expect(user.email).toBe("john@email.com")
    expect(user.password).toBe("ASDqwe123")
})

test("Não deve criar um conta sem nome", () => {
    const user = new User(
        "", 
        "john@email.com", 
        "ASDqwe123");
    expect(user).toBeDefined();
    expect(() => user.validate()).rejects.toThrow(new Error("Invalid Name"))
})

test("Não deve criar um conta sem emai correto", () => {
    const user = new User(
        "John Doe", 
        "", 
        "ASDqwe123");
    expect(user).toBeDefined();
    expect(() => user.validate()).rejects.toThrow(new Error("Invalid Email"))
})

test("Não deve criar um conta sem senha correta", () => {
    const user = new User(
        "John Doe", 
        "john@email.com", 
        "");
    expect(user).toBeDefined();
    expect(() => user.validate()).rejects.toThrow(new Error("Invalid Password"))
})