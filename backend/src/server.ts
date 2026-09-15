import express, { type Request, type Response } from "express";
import cors from "cors"
import bcrypt from 'bcrypt';

const app = express()
const port = 3000;

export type IUser = {
    userName: string;
    email: string;
    password: string;

}

app.use(cors());
app.use(express.json())

const users: IUser[] = []

app.get('/users', (req: Request, res: Response) => {
    res.status(200).json(users);
});

app.post('/users', async (req: Request, res: Response) => {
    const data = req.body
    const hash = await bcrypt.hash(data.password, 4)
    const user = {
        userName: data.userName,
        email: data.email,
        password: hash,
    }
    users.push(user)
    return res.status(201).json({message: "Usuario Registrado com sucesso"});
});

app.post("/login", async (req: Request, res: Response) => {
    const data = req.body
    const user = users.find((user) => user.userName === data.userName)
    const loginSucesso = user ? await bcrypt.compare(data.password, user.password) : false

    if(!loginSucesso) {
        return res.status(401).json({error: "Credenciais Invalidas"})
    }

    return res.status(200).json({message: "Login Realidado"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

