import express, { Request, Response } from "express";

const app = express();
const PORT = 9000;

const SUCCESS = 200
const INTERNAL_SERVER_ERROR = 500

app.post('/', (req: Request, res: Response) => {
    const successNumber = 1
    const number = Math.round(Math.random())
    if (number >= successNumber) {
        return res.status(SUCCESS).send('OK')
    }
    return res.status(INTERNAL_SERVER_ERROR).send('ERROR')
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
