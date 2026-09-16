import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { ServiceFetch } from "../../service/serviceFetch";

interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

export function ListTask() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const connection = new ServiceFetch();

    useEffect(() => {
        async function loadTasks() {
            const data = await connection.getTasks();
            setTasks(data);
        }
        loadTasks();
    }, []);

    async function handleAddItem(e: React.FormEvent) {
        e.preventDefault();
        if (inputValue.trim() === "") return;

        const newTask = await connection.postTask(inputValue);
        if (newTask) {
            setTasks((prev) => [...prev, newTask]);
            setInputValue("");
        }
    }

    async function handleToggleComplete(id: number) {
        const success = await connection.toggleTask(id);
        if (success) {
            setTasks((prev) =>
                prev.map((task) =>
                    task.id === id ? { ...task, completed: !task.completed } : task
                )
            );
        }
    }

    async function handleDeleteTask(id: number) {
        const success = await connection.deleteTask(id);
        if (success) {
            setTasks((prev) => prev.filter((task) => task.id !== id));
        }
    }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Lista de tarefas</h1>
      <div className={style.back}>
        <form onSubmit={handleAddItem} className={style.addTask}>
          <label htmlFor="tarefa">Digite a tarefa</label>
          <input
            id="tarefa"
            type="text"
            name="tarefa"
            placeholder="Digite uma tarefa"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Adicionar</button>
        </form>

        {tasks.map((task) => (
          <section key={task.id} className={style.tasks}>
            <p className={task.completed ? style.taskCompleted : ""}>
              {task.text}
            </p>
            <button
              id={style.concluir}
              type="button"
              onClick={() => handleToggleComplete(task.id)}
            >
              {task.completed ? "Refazer" : "Concluir"}
            </button>
            <button type="button" onClick={() => handleDeleteTask(task.id)}>
              X
            </button>
          </section>
        ))}
      </div>
    </div>
  );
}