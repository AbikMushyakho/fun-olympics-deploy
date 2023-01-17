import nodemailer from "nodemailer";
import fpMails from "./fpMails.js";
import {
  SENDER_EMAIL,
  EMAIL_PASSWORD,
  EMAIL_HOST,
  EMAIL_PORT,
  FROM_EMAIL,
} from "../utils/config.js";

class ForgetPwMail {
  SendEmail = async (email) => {
    const code = 100000 + Math.floor(Math.random() * 900000);
    const savedCode = await fpMails.saveToken(email, code);
    if (!savedCode) return false;
    try {
      const SenderEmail = SENDER_EMAIL;
      const ReceiverEmail = email;
      // using nodemailer to send mail
      // creating an transport
      let transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        auth: {
          user: SenderEmail,
          pass: EMAIL_PASSWORD,
        },
        secure: true,
      });
      // checking transport status
      const verifymail = await this.CheckValidEmail(transporter);
      if (!verifymail) return false;
      let info = transporter.sendMail({
        from: FROM_EMAIL,
        to: ReceiverEmail,
        subject: "Verification ✔",
        text: "Change password verification",
        html: `Your otp code is: <b>${code} </b>`,
      });
      if (info) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error.message;
    }
  };

  CheckValidEmail = async (transporter) => {
    const verified = await transporter.verify();
    if (verified) {
      return true;
    }
    return false;
  };
}
export default new ForgetPwMail();
