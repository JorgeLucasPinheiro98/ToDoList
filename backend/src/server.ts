import express, { type Request, type Response } from "express";
import cors from "cors"
import bcrypt from 'bcrypt';

const app = express()
const port = 3000;

export type IUser = {
    id: string;
    userName: string;
    email: string;
    password: string;
}

export type ITask = {
    id: number;
    userId: string;
    text: string;
    completed: boolean;
}

app.use(cors());
app.use(express.json())

const users: IUser[] = [];
const tasks: ITask[] = [];

app.get('/users', (req: Request, res: Response) => {
    res.status(200).json(users);
});

app.post('/users', async (req: Request, res: Response) => {
    const data = req.body
    const hash = await bcrypt.hash(data.password, 4)

    const newUser = {
        id: Date.now().toString(),
        userName: data.userName,
        email: data.email,
        password: hash,
    }

    users.push(newUser)

    return res.status(201).json({message: "Usuario Registrado com sucesso"});
});

app.post("/login", async (req: Request, res: Response) => {
    const data = req.body;
    const user = users.find((user) => user.userName === data.userName);
    const loginSucesso = user ? await bcrypt.compare(data.password, user.password) : false;

    if(!loginSucesso || !user) {
        return res.status(401).json({error: "Credenciais Invalidas"});
    }

    return res.status(200).json({
        message: "Login Realidado",
        userId: user.id
    });
});

app.get('/tasks', (req: Request, res: Response) => {
    const userId = req.headers["x-user-id"] as string;

    if(!userId) {
        return res.status(401).json({error: "Id do usuario não informado"}); 
    }

    const userTasks = tasks.filter((t) => t.userId === userId)
    res.status(200).json(userTasks);
});

app.post('/tasks', async (req: Request, res: Response) => {
    const userId = req.headers["x-user-id"] as string;
    const { text } = req.body

    if(!userId) {
        return res.status(401).json({error: "Id do usuario não informado"}); 
    }

    const newTask:ITask = {
        id: Date.now(),
        userId,
        text,
        completed: false
    }

    tasks.push(newTask)
    return res.status(201).json(newTask);
});

app.patch("/tasks/:id/toggle", (req: Request, res: Response) => {
    const userId = req.headers["x-user-id"] as string;
    const taskId = Number(req.params.id);
  
    const task = tasks.find((t) => t.id === taskId && t.userId === userId);
  
    if (!task) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }
  
    task.completed = !task.completed;
    return res.status(200).json(task);
  });
  
  app.delete("/tasks/:id", (req: Request, res: Response) => {
    const userId = req.headers["x-user-id"] as string;
    const taskId = Number(req.params.id);
  
    const index = tasks.findIndex((t) => t.id === taskId && t.userId === userId);
  
    if (index === -1) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }
  
    tasks.splice(index, 1);
    return res.status(204).send();
  });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

