import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://127.0.0.1:27017/Toggle_project"
    );
    console.log(`mongodb is connected to database ${connect.connection.host}`);
  } catch (error) {
    console.log(`error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
