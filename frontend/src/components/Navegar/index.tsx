import style from "./style.module.css"

export function Navegar() {
    return (
        <nav className={style.nav}>
            <a href="">Entrar</a>
            <a href="">Cadastrar</a>
        </nav>
    )
}