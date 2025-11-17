import dotenv from "dotenv";
dotenv.config({});
export const Base_URL= String(process.env.baseurl);
export const API_Key= String(process.env.trellokey) || "456cf8d93cb8c697c03f43080622a9c1";
export const Token= String(process.env.trellotoken) || "ATTAea138f0eed0e4226605d5fc77c347aa6bbc97f206e9f004f4b6027b2f72c71a4136AF8B2";
export const Email= String(process.env.email) || "saranyaprakash444@gmail.com";
export const Password= String(process.env.password) || "Saru@333";
export const Secret= String(process.env.secret) || "J4ZDQQ3GOQUUAYBEJRWFQZTGIZYVYKTW";