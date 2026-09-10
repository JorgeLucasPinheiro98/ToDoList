import { useState, type ChangeEvent, type FormEvent } from "react"
import style from "./style.module.css"
import { ServiceFetch } from "../../components/service/serviceFetch"

interface IFormInputRegister {
    userName: string
    email: string
    password: string
    repPassword: string
}

interface IFormErrorsRegister {
    userName?: string
    email?: string
    password?: string
    repPassword?: string
}

export function Register() {
    const [formData, setFormData] = useState<IFormInputRegister>({
        // userName: "",
        // email: "",
        // password: "",
        // repPassword: ""
        userName: "1234",
        email: "123@gmail.com",
        password: "1234",
        repPassword: "1234"
    })

    const [errors, setErrors] = useState<IFormErrorsRegister>({})

    const connection = new ServiceFetch()

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        if (errors[name as keyof IFormErrorsRegister]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const newErrors: IFormErrorsRegister = {}

        if (!formData.userName.trim()) {
            newErrors.userName = "O nome de usuário é obrigatório."
        } else if (formData.userName.trim().length < 4) {
            newErrors.userName = "O nome deve ter pelo menos 4 caracteres."
        }

        if (!formData.email.trim()) {
            newErrors.email = "O e-mail é obrigatório."
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Insira um e-mail válido."
        }

        if (!formData.password) {
            newErrors.password = "A senha é obrigatória."
        } else if (formData.password.length < 4) {
            newErrors.password = "A senha deve ter pelo menos 4 caracteres."
        }

        if (formData.password !== formData.repPassword) {
            newErrors.repPassword = "As senhas não coincidem."
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        console.log("Dados validados e prontos para envio:", formData)
        clearValues()
        connection.postUser({
            userName: formData.userName,
            email: formData.email,
            password: formData.password
        })
    }

    async function clearValues() {
        setFormData({
            userName: "",
            email: "",
            password: "",
            repPassword: ""
        })
        setErrors({})
        const dados = await connection.getUsers()
        console.log(dados)

    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.formRegister} noValidate>
                <h1 className={style.textRegister}>Register Page</h1>

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
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        className={`${style.elementsForm} ${errors.email ? style.inputError : ""}`}
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className={style.errorMessage}>{errors.email}</span>}
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Senha"
                        name="password"
                        className={`${style.elementsForm} ${errors.password ? style.inputError : ""}`}
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <span className={style.errorMessage}>{errors.password}</span>}
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="repPassword">Repita a senha</label>
                    <input
                        id="repPassword"
                        type="password"
                        placeholder="Repita a senha"
                        name="repPassword"
                        className={`${style.elementsForm} ${errors.repPassword ? style.inputError : ""}`}
                        value={formData.repPassword}
                        onChange={handleChange}
                    />
                    {errors.repPassword && <span className={style.errorMessage}>{errors.repPassword}</span>}
                </div>

                <button className={style.elementsForm} type="submit">
                    Registrar
                </button>

                <button className={style.elementsForm} type="button" onClick={clearValues}>
                    Limpar
                </button>

                <a href="#" className={style.link}>Fazer login</a>
            </form>
        </div>
    )
}