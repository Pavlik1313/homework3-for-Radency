import Ajv, {JSONSchemaType} from "ajv";
import {Request, Response, NextFunction} from "express";
import {NewNoteData} from "../interfaces/NewNoteData";
import {EditNoteData} from "../interfaces/EditNoteData";

const ajv = new Ajv();

export function validateReqBody(schema: JSONSchemaType<NewNoteData | EditNoteData>){
    const validate = ajv.compile(schema)

    return (req: Request, res: Response, next: NextFunction) => {
        const reqBodyIsValid = validate(req.body)
        if (reqBodyIsValid) next()
        else return res.status(400).send(validate.errors)
    }
}