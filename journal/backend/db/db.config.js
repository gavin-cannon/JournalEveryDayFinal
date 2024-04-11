import dotenv from "dotenv";
dotenv.config();


module.exports = {
    url: process.env.MONGODB_URI,
};