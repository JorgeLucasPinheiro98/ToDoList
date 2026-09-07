import { useState, type ChangeEvent, type FormEvent } from "react"
import style from "./style.module.css"

interface IFormInputLogin {
    userName: string
    password: string
}

export function Login() {
    const [formData, setFormData] = useState<IFormInputLogin>({
        userName: "",
        password: ""
    })

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("dados do formulário:", formData)
    }



    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.formLogin}>
                <h1 className={style.textLogin}>Login Page</h1>

                <label htmlFor="inputName"></label>
                <input type="text" placeholder="Username" name="userName" className={style.elementsForm} value={formData.userName} onChange={handleChange}/>

                <label htmlFor="inputPassword"></label>
                <input type="password" placeholder="Password" name="password" className={style.elementsForm} value={formData.password} onChange={handleChange}/>

                <button className={style.elementsForm}>Login</button>

                <a href="#" className={style.link}>Esqueceu a senha?</a>
            </form>
        </div>
    )
}