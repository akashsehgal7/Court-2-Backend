import { useState,useEffect } from 'react'
import axios from "axios"

function App() {
  const [notes, setnotes] = useState([])
  console.log("hello Intigration");
  function fetchNotes(){
    axios.get("http://localhost:3000/notes")
    .then(res =>{
    setnotes(res.data.notes);
  })
}
function handleSubmit(e){
  e.preventDefault()
  const {title, discription} = e.target.elements;
  console.log(title.value, discription.value);
  axios.post("http://localhost:3000/notes",{
    title: title.value,
    discription: discription.value
  })
  .then(res =>{
    console.log(res.data);
    fetchNotes();
    e.target.reset();
  })
}
function handleDeleteNote(noteId){
  axios.delete("http://localhost:3000/notes/"+noteId)
  .then(res => {
    console.log(res.data);
    fetchNotes()
  })
}
function handleUpdateNote(noteId){
  const newDiscripation = prompt("Enter new discription");
  if(!newDiscripation) return;
  axios.patch("http://localhost:3000/notes/"+noteId, {
    discription: newDiscripation
  })
  .then(res =>{
    console.log(res.data);
    fetchNotes();
  })
}
useEffect(()=>{
  fetchNotes();
},[])
  return (
    <>
    <form className='note-create-form' onSubmit={handleSubmit}>
      <input type="text" name='title' placeholder='Enter title'/>
      <input type="text" name='discription' placeholder='Enter discription' />
      <button>Create note</button>
    </form>
    <div className='notes'>
      {
        notes.map(note =>{
          return <div className='note'>
            <h1>{note.title}</h1>
            <p>{note.discription}</p>
            <button className='delete' onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
            <button className='update' onClick={()=> {handleUpdateNote(note._id)}}>Update</button>
          </div>
        })
      }
    </div>
    </>
  )
}

export default App
