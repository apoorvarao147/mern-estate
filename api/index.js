import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import contactRouter from "./routes/contact.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import fs from "fs";
import http  from "http";
import https from "https";
dotenv.config();

const app = express();

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/mernapi.apoorvarao.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/mernapi.apoorvarao.com/fullchain.pem')         
};

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS Server listening on port 443');
});



http.createServer(app).listen(3000, () => {
  console.log('HTTP Server listening on port 80');
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();


app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use("/api/contact",contactRouter)

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// app.listen(3000, () => {
//   console.log("Server is running on port 3000!!");
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});







