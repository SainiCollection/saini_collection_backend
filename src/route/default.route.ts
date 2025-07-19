import { Request, Response, Router } from "express";
import { defaultController } from "../controller/default.controller";
const router = Router();

router.get('/',(req:Request, res:Response)=>{
    defaultController(res);
})

export default router;