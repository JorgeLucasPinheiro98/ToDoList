import style from "./style.module.css"

interface NavegarProps {
    onNavigate: (screen: "tasks" | "login" | "register") => void
  }

export function Navegar({onNavigate}:NavegarProps) {
    return (
        <nav className={style.nav}>
            <a 
                href="#" 
                onClick={(e) => {
                e.preventDefault()
                onNavigate("tasks")
                }}
            >
                Tarefas
            </a>

            <a 
                href="#" 
                onClick={(e) => {
                e.preventDefault()
                onNavigate("login")
                }}
            >
                Login
            </a>

            <a 
                href="#" 
                onClick={(e) => {
                e.preventDefault()
                onNavigate("register")
                }}
            >
                Registrar
            </a>
        </nav>
    )
}