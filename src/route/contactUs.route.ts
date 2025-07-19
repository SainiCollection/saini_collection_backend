import {Request, Response, Router} from "express";
import { contactUsController, fetchContactUsController } from "../controller/contactUs.controller";

const router = Router();

// ---------------------------------------------------------------------------------CREATE CONTACT US ROUTE

/**
 * @swagger
 * components:
 *   schemas:
 *     ContactUs:
 *       type: object
 *       required:
 *         - senderName
 *         - senderEmail
 *         - phoneNo
 *         - service
 *         - message
 *       properties:
 *         senderName:
 *           type: string
 *           description: Name of the sender
 *           example: John Doe
 *         senderEmail:
 *           type: string
 *           format: email
 *           description: Email address of the sender
 *           example: johndoe@example.com
 *         phoneNo:
 *           type: string
 *           description: Phone number of the sender (10 digits, starts with 6-9)
 *           example: 9876543210
 *         service:
 *           type: string
 *           description: Service requested by the sender
 *           example: Web Development
 *         message:
 *           type: string
 *           description: The message content
 *           example: I would like to know more about your services.
 */

/**
 * @swagger
 * /create-contact:
 *   post:
 *     summary: Create a new contact message
 *     tags: [ContactUs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactUs'
 *     responses:
 *       200:
 *         description: Contact Us message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Contact Us message sent successfully
 *                 data:
 *                   $ref: '#/components/schemas/ContactUs'
 *       403:
 *         description: Validation error
 *       500:
 *         description: Internal Server Error
 */

router.post("/create-contact", (req: Request, res: Response) => {
  contactUsController(req, res);
});





// ---------------------------------------------------------------------------------FETCH CONTACT US ROUTE

/**
 * @swagger
 * /fetch-contact:
 *   get:
 *     summary: Fetch all contact messages
 *     tags: [ContactUs]
 *     responses:
 *       200:
 *         description: List of all contact messages fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 message:
 *                   type: string
 *                   example: Contact Us messages fetched successfully
 *                 messages:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ContactUs'
 *       404:
 *         description: No messages found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: not-found
 *                 message:
 *                   type: string
 *                   example: No messages found
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: INTERNAL SERVER ERROR
 */

router.get("/fetch-contact", (req: Request, res: Response) => {
  fetchContactUsController(req, res);
});

export default router;