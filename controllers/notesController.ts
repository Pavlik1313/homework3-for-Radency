import {Request, Response} from "express";
import {notesService} from "../services/NotesService";
import {EditNoteData} from "../interfaces/EditNoteData";
import {NewNoteData} from "../interfaces/NewNoteData";
import {NoteData} from "../interfaces/NoteData";
import {dateHelper} from "../helpers/dateHelper";

class NotesController {
    createNote(req:Request<{},{},NewNoteData>, res:Response){
        const newNote: NoteData = {
            ...req.body,
            id: Date.now(),
            created: dateHelper.getCreatedTime(),
            status: "active",
            dates: dateHelper.findDates(req.body.text)
        }
        notesService.addNote(newNote)
        return res.sendStatus(200)
    }
    getNotes(req:Request, res:Response){
        return res.send(notesService.getAllNotes())
    }
    getActiveNotes(req:Request, res:Response){
        const start = parseInt(<string>req.query.start)
        const count = parseInt(<string>req.query.count)

        return res.send(notesService.getActiveNotes(start, count))
    }
    getArchivedNotes(req:Request, res:Response){
        return res.send(notesService.getArchivedNotes())
    }
    getStatistic(req:Request, res:Response){
        return res.send(notesService.getStatistic())
    }
    getNoteById(req:Request, res:Response){
        const id = res.locals.id
        return res.send(notesService.getNoteById(id))
    }
    editNote(req:Request<{},{},EditNoteData>, res:Response){
        const id = res.locals.id
        const editedNote = {...req.body}
        notesService.editNote(id, editedNote)
        return res.sendStatus(200)
    }
    deleteNote(req:Request, res:Response){
        try {
            const id = res.locals.id
            notesService.deleteNote(id)
            return res.sendStatus(200)
        }catch (e){
            return res.send('something went wrong')
        }

    }

}

export const notesController = new NotesController()