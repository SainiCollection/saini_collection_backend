import mongoose,{Schema, Document} from "mongoose";

export interface IContactUs extends Document {
    senderName: string;
    senderEmail: string;
    phoneNo: string | number;
    service: string;
    message: string;
}

const ContactUsSchema:Schema = new Schema<IContactUs>({
    senderName:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    senderEmail:{
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phoneNo:{
        type: String,
        required: true,
        trim: true
    },
    service:{
        type: String,
        required: true,
        trim: true
    },
    message:{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps:true
})

const ContactUsModel = mongoose.model<IContactUs>('ContactUs', ContactUsSchema);
export default ContactUsModel;