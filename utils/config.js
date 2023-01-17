import "dotenv/config";

const PORT = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;
const SENDER_EMAIL = process.env.EMAIL;
const EMAIL_PASSWORD = process.env.PASSWORD;
const SECRET = process.env.SECRET;
const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const FROM_EMAIL = process.env.FROM_EMAIL;
export {
  MONGODB_URI,
  PORT,
  SENDER_EMAIL,
  EMAIL_PASSWORD,
  SECRET,
  EMAIL_HOST,
  EMAIL_PORT,
  FROM_EMAIL,
};
