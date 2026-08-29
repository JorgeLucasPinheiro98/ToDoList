import { User } from "../src/core/domain/entities/User.ts"

test("Deve criar um usuario", () => {
    const user = new User(
        "John Doe", 
        "john@email.com", 
        "ASDqwe123");
    expect(user).toBeDefined();
})