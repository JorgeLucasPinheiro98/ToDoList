import { Logo } from "../Logo";
import { Navegar } from "../Navegar";
import style from "./style.module.css"

interface HeaderProps {
    className?: string
    onNavigate: (screen: "tasks" | "login"| "register") => void
}

export function Header({onNavigate}:HeaderProps) {
    return (
        <header className={style.header}>
            <Logo/>
            <Navegar onNavigate={onNavigate}/>
        </header>
    )
}