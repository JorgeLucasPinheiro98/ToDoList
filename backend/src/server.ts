import express, { type Request, type Response } from "express";
import cors from "cors"

const app = express()
const port = 3000;

type IUser = {
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

app.post('/users', (req: Request, res: Response) => {
    const data = req.body
    const user = {
        userName: data.userName,
        email: data.email,
        password: data.password,
    }
    console.log(user, new Date().getDate())
    res.status(201).json(user);
    users.push(user)
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

