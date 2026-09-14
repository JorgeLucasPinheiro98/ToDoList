import React, { useEffect, useState } from "react"
import style from "./style.module.css"

interface ITask {
    id: number
    text: string
    completed: boolean
}

export function ListTask() {
    const [tasks, setTasks] = useState<ITask[]>(() => {
        const saveTasks = localStorage.getItem("@tasks-app:tasks");
        if(saveTasks) {
            return JSON.parse(saveTasks);
        }
        return [];
    });

    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        localStorage.setItem("@tasks-app:tasks", JSON.stringify(tasks))
    }, [tasks]);

    function handleAddItem (e: React.FormEvent) {
        e.preventDefault();

        if(inputValue.trim() === "") return

        const newTask: ITask = {
            id: Date.now(),
            text: inputValue,
            completed: false
        }

        setTasks((prevTasks) => [...prevTasks, newTask])
        setInputValue("")
    }

    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }

    function handleToggleComplete (id:number) {
        setTasks((prevTasks) => 
            prevTasks.map((task) =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        )
    }

    function handleDeleteTask (id: number) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }
    
    return (
        <div className={style.container}>
            <h1 className={style.title}>Lista de tarefas</h1>
                <div className={style.back}>
                <form onSubmit={handleAddItem}className={style.addTask}>
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
                        <button
                        type="button"
                        onClick={() => handleDeleteTask(task.id)}
                        >
                            X
                        </button>
                    </section>
                ))}
            </div>
        </div>
    )
}