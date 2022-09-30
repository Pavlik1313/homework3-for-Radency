import {JSONSchemaType} from "ajv"
import {NewNoteData} from "../interfaces/NewNoteData";

export const newNoteSchema: JSONSchemaType<NewNoteData> = {
    type: "object",
    properties: {
        name: {type: "string"},
        category: {type: "string"},
        text: {type: "string"},
    },
    required: ["name","category","text"],
    additionalProperties: false
}