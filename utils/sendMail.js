const nodemailer = require('nodemailer');

const sendMail = async (to, content) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // Use the transporter to send emails
  try {
    const res = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: to,
      subject: 'Hello',
      html: content,
    });
    //console.log(res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;
