const express = require('express');
const app = express()
const noteModel = require("./models/notes.model");
const cors = require("cors");
const path = require("path")
app.use(express.json())
app.use(express.static("./Public"))
app.use(cors());

app.post("/notes",async (req, res)=>{
    const {title, discription} = req.body;
    const notes = await noteModel.create({
        title, discription
    })
    res.status(201).json({
        message:"note created successfully",
        notes
    })
})

app.get("/notes",async (req, res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message: "Notes fetch successfully",
        notes
    })
})
app.delete("/notes/:id",async (req, res)=>{
    const id = req.params.id;
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message:"Note deleted successfully"
    })
})
app.patch("/notes/:id",async (req, res)=>{
    const id = req.params.id;
    const {discription} = req.body;
    await noteModel.findByIdAndUpdate(id,{discription})
    res.status(200).json({
        message: "Note updated successfully."
    })
})
app.use("*name",(req, res)=>{
    res.sendFile(path.join(__dirname, "..","/Public/index.html"))
})
module.exports = app;