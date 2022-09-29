import express from "express";
const   notesRouter = require("./routers/notesRouter"),
        infoRouter = require("./routers/infoRouter")

const app = express();
app.use(express.json());

app.use(notesRouter)
    .use(infoRouter)


app.listen(3050, ()=>console.log('http://localhost:3050'))
