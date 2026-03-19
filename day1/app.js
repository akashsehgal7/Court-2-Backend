const express = require('express');
const app = express();

const notes = [{name:"william"}];
app.use(express.json());

app.get("/",(req, res)=> {
    res.send("hello world!");
})

app.post("/notes", (req, res)=> {

    console.log(req.body);
    notes.push(req.body);
    console.log(notes);
    res.send("note created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("notes/:index",(req, res)=>{
    delete notes[req.params.index]
})

app.delete("/notes/:index", (req, res) => {
    const index = parseInt(req.params.index);

    if (index >= 0 && index < notes.length) {
        notes[index] = null; // yahan null assign kar diya
        res.send("Note deleted successfully (set to null)");
    } else {
        res.status(404).send("Note not found");
    }
});
app.patch("/notes/:index",(req, res)=>{
    notes[req.params.index * 1].description = req.body.description;
    res.send("note updated successfully");
})
module.exports = app
