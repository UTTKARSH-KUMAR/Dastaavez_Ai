const express = require("express");
const app = express();
var bcrypt = require("bcrypt");
var cors = require("cors");
let http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db.config");

const db = require("./src/models");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
let routes = require("./src/routes")
dotenv.config();


// var usersData = {
//   fullName: "Uttkarsh Kumar",
//   password: "Uttkarsh@123",
//   firstName: "Uttkarsh",
//   lastName: "Kumar",
//   email: "uttkarshthakur0325@gmail.com",
//   role: "admin",
//   status: "active",
//   isVerified: "Y",
//   isDeleted: false
// };
// const roleData = {
//   name:"admin",
//   code:"admin",
// }
 
// const seedDb = async () => {
//   let roleId  = ""
//  if((await db.role.countDocuments() ==0)){
//     roleId = await db.role.create(roleData);
//   }

//   if ((await db.users.countDocuments()) == 0) {
//     usersData.password = bcrypt.hashSync(
//       usersData.password,
//       bcrypt.genSaltSync(10)
//     );
//     usersData.role = roleId._id
//     await db.users.create(usersData);
 
//   }

  
// };
// seedDb();

// Connect DB before starting server
db.mongoose.set("strictQuery", false);
db.mongoose
  .connect(db.url, {})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    process.exit();
  });

app.use(express.json());

// Example route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
