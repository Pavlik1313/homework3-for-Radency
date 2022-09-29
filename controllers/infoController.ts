import {Request, Response} from "express";
import path from "path";

export function getInfoController (req: Request, res: Response){
    return res.sendFile(path.join(__dirname, '../info.html'))
}
