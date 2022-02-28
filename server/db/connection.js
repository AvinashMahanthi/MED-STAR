const mongoose = require("mongoose");
const MONGOURI =
  "mongodb://Avinash:Mnd6F9P2u6TEWooQ@cluster0-shard-00-00.j98ms.mongodb.net:27017,cluster0-shard-00-01.j98ms.mongodb.net:27017,cluster0-shard-00-02.j98ms.mongodb.net:27017/Database?ssl=true&replicaSet=atlas-12neua-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports = () => {
  mongoose
    .connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connection sucessfull!🚀");
    })
    .catch((e) => {
      console.log(e);
    });
};
