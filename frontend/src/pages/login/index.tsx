import style from "./style.module.css"

export function Login() {
    return (
        <div className={style.container}>
            <form action="" className={style.formLogin}>
                <h1 className={style.textLogin}>Login Page</h1>
                <label htmlFor="inputName"></label>
                <input type="text" placeholder="Username" name="inputName" className={style.elementsForm}/>
                <label htmlFor="inputPassword"></label>
                <input type="text" placeholder="Password" name="inputPassword" className={style.elementsForm}/>
                <button className={style.elementsForm}>Login</button>
                <a href="#" className={style.link}>Esqueceu a senha?</a>
            </form>
        </div>
    )
}