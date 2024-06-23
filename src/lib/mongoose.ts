"use server";
import mongoose from "mongoose";

let isConnected: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB is not set");
  }
  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Ucademy9",
    });
    isConnected = true;
    console.log("MONGODB is running");
  } catch (error) {
    console.log("Error connecting to database");
  }
};
