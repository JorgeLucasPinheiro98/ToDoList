import { Logo } from "../Logo";
// import { Navegar } from "../Navegar";
import style from "./style.module.css"

export function Header() {
    return (
        <header className={style.header}>
            <Logo/>
            {/* <Navegar/> */}
        </header>
    )
}