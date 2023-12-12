const nodemailer = require("nodemailer");

const sendMail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "filiberto.bruen@ethereal.email",
      pass: "cTfrSmKQgkvDrZPuPm",
    },
  });

  let mailOptions = {
    from: '"Sender Name" <sender@email.com>',
    to,
    subject,
    text,
  };

  let response = await transporter.sendMail(mailOptions);
  console.log("response", response);
  return response;
};

module.exports = sendMail;
