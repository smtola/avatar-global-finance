import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors()); // To allow requests from your frontend
app.use(bodyParser.json()); // To parse JSON payloads

// SMTP Configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.dreamhost.com', // SMTP server address
  port: 465, // Port number for secure connections (TLS)
  secure: true, // true for port 465, false for other ports
  auth: {
    user: 'noreply@avatar-gfaf.com.kh', // Replace with your SMTP server username
    pass: 'noreply@avatar-gfaf.com.kh', // Replace with your SMTP server password
  },
  connectionTimeout: 10000, // 10 seconds
  greetingTimeout: 10000, // 10 seconds
  socketTimeout: 10000, // 10 seconds
});

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { from_name, phone, from_email, subject, message } = req.body;

  const mailOptions = {
    from: from_email,
    to: 'tolasom.titan@gmail.com', // Replace with your destination email
    subject: subject,
    text: `
      Name: ${from_name}
      Phone: ${phone}
      Email: ${from_email}
      Subject: ${subject}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    }
    res.status(200).json({ message: 'Email sent', response: info.response });
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
