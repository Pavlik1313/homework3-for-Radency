import express from 'express'
import {validateReqBody} from "../middleware/validateReqBody";
import {newNoteSchema} from "../schema/newNoteSchema";
import {editNoteSchema} from "../schema/editNoteSchema";
import {validateIdFromSlug} from "../middleware/validateIdFromSlug";
import {notesController} from "../controllers/notesController";

const notesRouter = express.Router()

notesRouter.route('/notes/')
    .get(notesController.getNotes)
    .post(validateReqBody(newNoteSchema), notesController.createNote)

notesRouter.route('/notes/active')
    .get(notesController.getActiveNotes)

notesRouter.route('/notes/archived')
    .get(notesController.getArchivedNotes)


notesRouter.route('notes//statistic')
    .get(notesController.getStatistic)

notesRouter.use('/notes/:id', validateIdFromSlug())

notesRouter.route('/notes/:id')
    .get(notesController.getNoteById)
    .patch(validateReqBody(editNoteSchema), notesController.editNote)
    .delete(notesController.deleteNote)

module.exports = notesRouter