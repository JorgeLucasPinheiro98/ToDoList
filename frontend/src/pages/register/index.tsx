import style from "./style.module.css"

export function Register() {
    return (
        <div className={style.container}>
            <form action="" className={style.formRegister}>
                <h1 className={style.textRegister}>Register Page</h1>
                <label htmlFor="inputName"></label>
                <input type="text" placeholder="Username" name="inputName" className={style.elementsForm}/>
                <label htmlFor="inputEmail"></label>
                <input type="text" placeholder="E-mail" name="inputEmail" className={style.elementsForm}/>
                <label htmlFor="inputPassword"></label>
                <input type="text" placeholder="Password" name="inputPassword" className={style.elementsForm}/>
                <label htmlFor="repInputPassword"></label>
                <input type="text" placeholder="Repeat Password" name="repeatInputPassword" className={style.elementsForm}/>
                <button className={style.elementsForm}>Registrar</button>
                <button className={style.elementsForm}>Limpar</button>
                <a href="#">Fazer login</a>
            </form>
        </div>
    )
}