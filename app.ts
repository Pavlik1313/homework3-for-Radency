import express from "express";
import {routes} from "./routes";
const app = express();
app.use(express.json());
routes(app);

app.listen(3050, ()=>console.log('http://localhost:3050'))
