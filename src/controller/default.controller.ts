import { Response } from "express";

export const defaultController = (res:Response)=> {
    res.status(200).send("Saini Collection Backend");
}