const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "YOUR_USERNAME",
    pass: "YOUR_PASSWORD",
  },
});

/**
 * Sends an email using Nodemailer.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} text - The content of the email.
 * @returns {Promise<any>} - A promise that resolves with the response from sending the email.
 */
const sendMail = async (to, subject, text) => {
  let mailOptions = {
    from: '"Sender Name" <sender@email.com>', // Update sender if needed
    to,
    subject,
    text,
  };

  let response = await transporter.sendMail(mailOptions);
  return response;
};

module.exports = sendMail;
