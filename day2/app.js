const express = require("express");
const app = express();

const notes = [];
app.post("/notes",(req, res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"Notes created successfully"
    })
})
app.get("/notes",(req, res)=>{
    res.status(200).json({
        notes: notes
    })
})
app.delete("/notes/:index",(req, res)=>{
    const index = req.params.index;
    delete notes[index];
    res.status(300).json({
        message: "note delete successfully"
    })
})
app.patch("/notes?:index",(req, res)=>{
    const index = req.params.index;
    const discription = req.body.discription;
    notes[index].discription = discription;
    req.status(200).json({
        message: "note update successfully"
    })
})

module.exports = app;