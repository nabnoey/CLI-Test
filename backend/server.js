import express from "express";
import dotenv from "dotenv"
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.get("/api/hello", (req, res) =>{
    res.send("Backend ทำงานแล้วเย้");
})

app.listen(PORT, () =>{
    console.log("Backend running at http://localhost:" + PORT);
})