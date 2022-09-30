import express from "express";
import {getInfoController} from "../controllers/infoController";

const infoRouter = express.Router()

infoRouter.route('/')
    .get(getInfoController)

module.exports = infoRouter