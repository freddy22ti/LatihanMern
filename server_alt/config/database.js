import mongoose from "mongoose";

const connect = () => {
  mongoose
    .connect(process.env.ATLAS_URI)
    .then(() => {
      return console.info(`Successfully connected to atlas mongodb`);
    })
    .catch((error) => {
      console.error("Error connecting to database: ", error);
      return process.exit(1);
    });
    
};

export const connectDatabase = () => {
    connect();
    mongoose.connection.on('disconnected', connect);
}