import express, { type Request, type Response } from "express";
import cors from "cors"
import bodyParser from "body-parser";

const app = express()
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req: Request, res: Response) => {
    const data = req.body;
    console.log(data)

    if(!data) {
        return res.status(400).json({mensagem: 'Informe os dados'})
    }
    res.status(200).json({mensagem: 'Dados recebidos'})
});

app.get('/', (req: Request<{}, {}, FormData>, res: Response) => {
    res.send('Server runing')
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})