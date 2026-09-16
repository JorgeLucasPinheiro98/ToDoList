import { useState, type ChangeEvent, type FormEvent } from "react"
import style from "./style.module.css"
import { ServiceFetch } from "../../service/serviceFetch"

interface IFormInputLogin {
    userName: string
    password: string
}

interface LoginProps {
    onLoginSuccess: () => void;
  }

interface IFormErrorsLogin {
    userName?: string
    password?: string
}

export function Login({ onLoginSuccess }: LoginProps) {
    const [formData, setFormData] = useState<IFormInputLogin>({
        userName: "",
        password: ""
    })

    const [errors, setErrors] = useState<IFormErrorsLogin>({})

    const connection = new ServiceFetch()

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


    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newErrors: IFormErrorsLogin = {}
    
        if (!formData.userName.trim()) {
            newErrors.userName = "O nome do Usuário é obrigatório"
        }
    
        if (!formData.password.trim()) {
            newErrors.password = "A senha é obrigatória"
        }
    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
    
        const response = await connection.postLogin(formData);

        if (response.status === 200 && response.userId) {
            localStorage.setItem("@tasks-app:userId", response.userId);
            clearValues();
            onLoginSuccess();
        }
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