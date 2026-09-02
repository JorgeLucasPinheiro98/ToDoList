import { Header } from "../components/Header";
import { ListTask } from "../components/ListTask";
import style from "./style.module.css"


export function Layout () {
    return (
        <div>
            <div>
                <Header className={style.container}/>
            </div>
            <div className={style.containerTask}>
                <ListTask/>
            </div>
        </div>
    )
}