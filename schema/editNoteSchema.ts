import {JSONSchemaType} from "ajv";
import {EditNoteData} from "../interfaces/EditNoteData";

export const editNoteSchema: JSONSchemaType<EditNoteData> = {
    type: "object",
    properties: {
        name: {type: "string", nullable: true},
        category: {type: "string", nullable: true},
        text: {type: "string", nullable: true},
        status: {
            type: "string",
            enum: ["active", "archived"],
            nullable: true}
    },
    required: [],
    additionalProperties: false
}