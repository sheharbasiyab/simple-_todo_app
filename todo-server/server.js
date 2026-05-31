const express=require("express");
const mongoose=require("mongoose");
const { createActivity , getActivity , deleteActivity} = require("./controllers/activityController");
const cors =require("cors")

const dns = require ('dns');
dns.setServers(['8.8.8.8','8.8.4.4']);

const app=express();
app.use(express.json())
app.use(cors())
const mongo_url="mongodb+srv://sheharbasiyab_db_user:7KvPCPGr2eHdodDj@cluster0.y1smnbt.mongodb.net/?appName=Cluster0"
mongoose.connect(mongo_url)
  .then(() => console.log("Mongodb connected successfully"))
  .catch((err) => console.log("Unable to connect to mongodb", err));

app.post("/create", createActivity);
app.get("/", getActivity);
app.delete("/:id", deleteActivity);

app.listen(8080,()=>{
    console.log(`Server listening at port 8080`);
});
