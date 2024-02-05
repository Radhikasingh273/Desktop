import express from "express";
import bodyParse from "body-parser";
import MarriageRouter from "./routes/marriage.route.js"
import StartUpRouter from "./routes/startUp.route.js"


const app = express();

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.use("/marriage",MarriageRouter);
app.use("/startup",StartUpRouter);

app.listen(3000,()=>{
    console.log("Server Started.");
});