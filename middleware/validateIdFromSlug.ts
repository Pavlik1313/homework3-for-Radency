import {Request, Response, NextFunction} from "express";
import {notesService} from "../services/NotesService";

export function validateIdFromSlug (){
    return (req: Request, res: Response, next: NextFunction)=>{
            const id = parseInt(req.params.id)

            if (isNaN(id)) return res.status(400).send(`Invalid id: ${req.params.id}`)
            if (notesService.getNoteById(id)){
                res.locals.id = id
                next()
            }
            else return res.status(400).send(`Note with id: ${id} not found`)
    }
}