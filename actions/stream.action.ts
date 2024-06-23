"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECREAT_KEY ;

export const tokenProvider = async () =>{
 const user = await currentUser();
 if (!user) {
    throw new Error("User Is Not Logged In")
 }
 if(!apiKey) throw new Error("The Api Key Not Found");
 if(!apiSecret) throw new Error("The Api Secret Key Not Found");

 const client = new StreamClient(apiKey , apiSecret)

 // exp is optional (by default the token is valid for an hour)
const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

const issued = Math.floor(Date.now() /1000) - 60;
const  token = client.createToken(user.id, exp , issued);
return token;
}