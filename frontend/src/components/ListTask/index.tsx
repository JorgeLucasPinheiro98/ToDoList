import style from "./style.module.css"

export function ListTask() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Lista de tarefas</h1>
                <div className={style.back}>
                <section className={style.addTask}>
                    <label htmlFor="tarefa"></label>
                    <input type="text" name="tarefa" placeholder="Digite uma tarefa"/>
                    <button>Adicionar</button>
                </section>
                <section className={style.tasks}>
                    <p>Trocar a senha do E-mail</p>
                    <button id={style.concluir}>Concluir</button>
                    <button>X</button>
                </section>
                <section className={style.tasks}>
                    <p>Trocar a senha do E-mail</p>
                    <button id={style.concluir}>Concluir</button>
                    <button>X</button>
                </section>
            </div>
            
        </div>
    )
}