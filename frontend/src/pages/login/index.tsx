import style from "./style.module.css"

export function Login() {
    return (
        <div className={style.container}>
            <form action="">
                <h1>Login Page</h1>
                <label htmlFor="inputName"></label>
                <input type="text" placeholder="Username" name="inputName"/>
                <label htmlFor="inputPassword"></label>
                <input type="text" placeholder="Password" name="inputPassword"/>
                <button>Login</button>
                <a href="#">Esqueceu a senha?</a>
            </form>
        </div>
    )
}