import express, { type Request, type Response } from "express";
import cors from "cors"

const app = express()
const port = 3000;

app.use(cors());
app.use(express.json())


app.get('/users', (req: Request, res: Response) => {
    const users = [
        {
            name: "joao",
            password: "1234"
        }
    ]
    res.status(200).json(users);
});

app.post('/users', (req: Request, res: Response) => {
    const data = req.body
    const user = {
        userName: data.userName,
        email: data.email,
        password: data.password,
    }
    res.status(201).json(user);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})