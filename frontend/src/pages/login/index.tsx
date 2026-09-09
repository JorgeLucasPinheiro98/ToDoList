import { useState, type ChangeEvent, type FormEvent } from "react"
import style from "./style.module.css"

interface IFormInputLogin {
    userName: string
    password: string
}

interface IFormErrorsLogin {
    userName?: string
    password?: string
}

export function Login() {
    const [formData, setFormData] = useState<IFormInputLogin>({
        userName: "",
        password: ""
    })

    const [errors, setErrors] = useState<IFormErrorsLogin>({})

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        if(errors[name as keyof IFormErrorsLogin]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined
            }))
        }
    }


    function handleSubmit (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newErrors: IFormErrorsLogin = {}

        if(!formData.userName.trim()) {
            newErrors.userName = "O nome do Usuário é obrigatótio"
        }

        if(!formData.password.trim()) {
            newErrors.password = "A senha é obrigatória"
        }

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        console.log("Dados validados e prontos para envio:", formData)
        clearValues()
    }

    function clearValues() {
        setFormData({
            userName: "",
            password: "",
        })
        setErrors({})
    }


    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.formLogin} noValidate>
                <h1 className={style.textLogin}>Login Page</h1>

                <div className={style.inputGroup}>
                    <label htmlFor="userName">Usuário</label>
                    <input
                        id="userName"
                        type="text"
                        placeholder="Username"
                        name="userName"
                        className={`${style.elementsForm} ${errors.userName ? style.inputError : ""}`}
                        value={formData.userName}
                        onChange={handleChange}
                    />
                    {errors.userName && <span className={style.errorMessage}>{errors.userName}</span>}
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        className={`${style.elementsForm} ${errors.password ? style.inputError : ""}`}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className={style.errorMessage}>{errors.password}</span>}
                </div>

                <button type="submit" className={style.elementsForm}>Login</button>

                <a href="#" className={style.link}>Esqueceu a senha?</a>
            </form>
        </div>
    )
}