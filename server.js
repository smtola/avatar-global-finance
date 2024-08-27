import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Set up the nodemailer transport with DreamHost SMTP
    let transporter = nodemailer.createTransport({
        host: 'smtp.dreamhost.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER, // Your DreamHost email
            pass: process.env.SMTP_PASS  // Your DreamHost email password
        }
    });

    // Set up the email data
    let mailOptions = {
        from: email,
        to: process.env.SMTP_USER, // Your DreamHost email or where you want to receive the email
        subject: `Contact Form Submission from ${name}`,
        text: message
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: 'Error sending email', error });
        }
        res.status(200).send({ message: 'Email sent successfully!', info });
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
