require('dotenv/config');
import mongoose from "mongoose";

export async function connect(){
  try{
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    const cluster = process.env.MONGODB_CLUSTER;
    
    const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/`;

    await mongoose.connect(url);
    console.log("Database connected");
  } catch(error){
    console.log("file: database.ts:5 > connect > error:", error);
  }
}