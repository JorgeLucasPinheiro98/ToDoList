import { ToDo } from "../src/core/domain/entities/Todo.ts";

test("Deve criar uma lista de tarefas", () => {
    const toDo = new ToDo("Terminar a tarefa", "criar a lista de tarefas");

    expect(toDo).toBeDefined();
} )