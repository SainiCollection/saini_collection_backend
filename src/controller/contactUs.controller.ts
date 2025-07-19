import { Request, Response } from "express";        
import { contactUsValidator } from "../validators/data.validator";
import { createContactUs } from "../service/contactUs.service";
import ContactUsModel from "../model/contactus.model";

// ---------------------------------------------------------------------------------CREATE CONTACT US CONTROLLER
export const contactUsController = async (req:Request, res:Response)=>{
    try {
        const parsed = contactUsValidator.safeParse(req.body);
        if(!parsed.success){
            return res.status(403).json({
                status:"Validation error",
                message:"Invalid message inputs",
                errors:parsed.error.format()
            })
        }
        const {senderName, senderEmail,phoneNo, service, message} = parsed.data;
        const contactData= await createContactUs(req.body);
        return res.status(200).json({
            status:"success",
            message:"Contact Us message sent successfully",
            data:contactData
        });

    } catch (error) {
        return res.status(500).json({
            status:"error", message:"INTERNAL SERVER ERROR", error})
    }
}

// ---------------------------------------------------------------------------------FETCH CONTACT US CONTROLLER
export const fetchContactUsController = async (req:Request, res:Response)=>{
    try {
        const messages = await ContactUsModel.find();
        if(messages){
            return res.status(200).json({
                status:"success",
                message:"Contact Us messages fetched successfully",
                messages
            })
        }else{
            return res.status(404).json({
                status:"not-found",
                message:"No messages found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            status:"error", message:"INTERNAL SERVER ERROR", error
        })
    }
}