// const mysql=require('mysql')

// const con=mysql.createPool({
//     host:"127.0.0.1",
//     user:"root",
//     password:"dat130299",
//     database:'traveloka',
//     port:3306
// })

// module.exports=con

const mongoose = require("mongoose");
const uri =
  "mongodb+srv://thanhtruong0901234:truong911@cluster0.sdtewo6.mongodb.net/?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const con = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;

