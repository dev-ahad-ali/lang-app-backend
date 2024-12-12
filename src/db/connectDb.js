import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rocppxe.mongodb.net/${process.env.DB_NAME}`
    );
    console.log(`Database connection host : `, connectionInstance.connection.host);
  } catch (error) {
    console.log('Database connection error : ', error);
    throw new error();
  }
};
