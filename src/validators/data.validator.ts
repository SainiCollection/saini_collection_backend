import {z} from "zod";

// -----------------------------------------------------------------------------Contact Us
export const contactUsValidator = z.object({
    senderName: z.string().min(1, "Name is required").max(50, "Name must be less than 50 characters"),
    senderEmail: z.string().email("Invalid email format").max(100, "Email must be less than 100 characters"),
    phoneNo: z.coerce.string().regex(/^[6-9]\d{9}$/, "Invalid phone number, must be 10 digits starting with 6, 7, 8, or 9"),
    service: z.string().min(1, "Service is required"),
    message: z.string().min(1, "Message is required")
})