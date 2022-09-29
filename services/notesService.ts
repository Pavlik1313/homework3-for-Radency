import {NoteData} from "../interfaces/NoteData";
import {Statistic} from "../interfaces/Statistic";
import {EditNoteData} from "../interfaces/EditNoteData";

class NotesService {
    notes: NoteData[] = []

    getAllNotes(){
        return this.notes
    }

    addNote(note: NoteData){
        this.notes.push(note)
    }
    getActiveNotes(start?:number, count?:number){
        const allActiveNotes: NoteData[] = this.notes.filter((note)=> note.status === 'active')
        if(start) {
            if(count) return allActiveNotes.slice(start, start + count)
            else return allActiveNotes.slice(start)
        }else{
            return allActiveNotes
        }
    }
    getArchivedNotes(){
        return this.notes.filter((note)=> note.status === 'archived')
    }
    clearArchive(){
        this.notes = this.notes.filter((note)=>note.status !== 'archived')
    }
    getStatistic() {
        let statistic: Statistic = {};
        this.notes.forEach((note:NoteData)=>{
            if(!statistic.hasOwnProperty(note.category)) statistic[note.category] = {active:0, archived:0}
            if(note.status === "active") statistic[note.category].active++
            if(note.status === "archived") statistic[note.category].archived++
        })
        return statistic
    }
    getNoteById(id:number){
        return this.notes.find((note)=>note.id === id)
    }
    editNote(id:number, editedNote: EditNoteData){
        const noteIndex = this.notes.findIndex((note) => note.id === id)
        if (noteIndex > -1){
            this.notes[noteIndex] = {...this.notes[noteIndex], ...editedNote};
        }else throw `Note with id: ${id} not found`
    }
    deleteNote(id:number){
        const noteIndex = this.notes.findIndex((note) => note.id === id)
        if (noteIndex > -1){
            this.notes.splice(noteIndex, 1);
        }
    }

}