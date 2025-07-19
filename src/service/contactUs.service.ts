import ContactUsModel,{IContactUs} from "../model/contactus.model"; 

// ---------------------------------------------------------------------------------CREATE 
export const createContactUs = async (contactData: IContactUs)=> {
    const message = new ContactUsModel(contactData);
    return await message.save();
}