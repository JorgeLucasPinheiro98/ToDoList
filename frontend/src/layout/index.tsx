import { useState } from "react";
import { Header } from "../components/Header";
import { ListTask } from "../components/ListTask";
import style from "./style.module.css"
import { Login } from "../pages/login";
import { Register } from "../pages/register";


export function Layout () {
    const [currentScreen, setCurrentScreen] = useState<"tasks" | "login"| "register">("login");

    function renderContent() {
        switch (currentScreen) {
            case "login":
                return <Login/>
            case "register":
                return <Register/>
            case "tasks":
                default:
                return <ListTask/>
        }
    }

    return (
        <div>
            <div className={style.content}>
                <Header 
                className={style.container}
                onNavigate={(screen) => setCurrentScreen(screen)}
                />
            </div>
            <div className={style.containerTask}>
                {renderContent()}
            </div>
        </div>
    )
}