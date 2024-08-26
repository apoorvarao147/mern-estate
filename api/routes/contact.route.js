import express from "express";
const contactRouter = express.Router();
import nodemailer from "nodemailer";

contactRouter.post("/", async (req, res) => {
    try {
        const outcome = await createContact(req.body);
        if (outcome) {
            res.status(200).send("success");
        } else {
            res.status(400).send("failed");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

const createContact = async (payload) => {
    try {
        const name = payload.name;
        const email = payload.email;
        const message = payload.message;

        if (name && email && message) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "raoapoorva781@gmail.com",
                    pass: "ybba lbyy fnht ayke",
                    // pass: "soLiZKbz4qUQ3Y",
                },
            });

            const mailOptions = {
                from: "raoapoorva781@gmail.com",
                to: "apoorvarao147@gmail.com",
                subject: `Email From ${name}`,
                replyTo: email,
                text: message,
            };

            const outcome = await transporter.sendMail(mailOptions);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

export default contactRouter;