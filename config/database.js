const mongoose = require("mongoose");

// const dbConnect = () => {
//   mongoose
//     .connect(process.env.DATABASE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("db connect -> success");
//     })
//     .catch((error) => {
//       console.log("db connect -> error");
//       console.log(error.message);

//       // used to end the process which is running at the same time with an exit code
//       process.exit(1);
//     });
// };

// module.exports = dbConnect;

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB - Connect -> Successfull");
  } catch (error) {
    console.log("DB - Connect -> Error");
    console.log(error.message);

    process.exit(1);
  }
};

module.exports = dbConnect;
