const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const postCharge = require("./stripe");
const cors = require("cors");

const app = express();
const router = express.Router();
const port = process.env.PORT || 7000;

app.use(cors());
// app.use((_, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     // "Origin, X-Requested-With, Content-Type, Accept"
//     "*"
//   );
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   next();
// });
app.use(bodyParser.json());

router.post("/stripe/charge", postCharge);

router.all("*", (_, res) =>
  res.json({ message: "please make a POST request to /stripe/charge" })
);
// app.use("/api", router);
// app.use(express.static(path.join(__dirname, "../../public")));

// app.get("*", (_, res) => {
//   res.sendFile(path.resolve(__dirname, "../../public/index.html"));
// });

app.listen(port, () => console.log(`server running on port ${port}`));
