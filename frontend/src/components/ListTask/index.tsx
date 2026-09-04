import React, { useState } from "react"
import style from "./style.module.css"

export function ListTask() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleAddItem = (e: React.FormEvent) => {
        e.preventDefault();
        if(inputValue.trim() === "") return
        setTasks((prevTasks) => [...prevTasks, inputValue])
        setInputValue("")
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
    const listTask = tasks.map(task => 
        <section className={style.tasks}>
            <p>{task}</p>
            <button id={style.concluir}>Concluir</button>
            <button>X</button>
        </section>
    )
    
    function addTask() {

    }

    return (
        <div className={style.container}>
            <h1 className={style.title}>Lista de tarefas</h1>
                <div className={style.back}>
                <form onSubmit={handleAddItem}className={style.addTask}>
                    <label htmlFor="tarefa"></label>
                    <input type="text" name="tarefa" placeholder="Digite uma tarefa" value={inputValue} onChange={handleInputChange}/>
                    <button onClick={addTask}>Adicionar</button>
                </form>
                {listTask}
            </div>
        </div>
    )
}