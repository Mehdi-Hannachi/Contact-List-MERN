const mongoose = require("mongoose");
require('dotenv').config({path : "./config/.env"})
const mongouri = process.env.mongouri

// const config = require("config");

// const connectDB = () => {
//   mongoose
//     .connect(config.get("MONGI_URI"), {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(console.log("mongoose is connected"))
//     .catch((err) => console.log(err));
// };

const connectDB = async () => {
  try {
    mongoose.connect(
      mongouri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:true,
      },
      () => console.log("mongoose is connected")
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
