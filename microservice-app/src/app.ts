import express from "express";
import router from "./route";

const app = express();
const PORT = 8000;

app.use(router);

app.listen(PORT, async () => console.log(`Listening at http://localhost:${PORT}`));


