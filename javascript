import React, { useState } from 'react';
import './App.css';

// Main component for the Notes App
function App() {

  // This state stores all notes in a list
  const [notes, setNotes] = useState([]);

  // This state stores what the user is typing
  const [input, setInput] = useState('');

  // This function adds a new note to the list
  function addNote() {
    if (input !== '') {
      setNotes([...notes, input]); // add new note to list
      setInput(''); // clear input box
    }
  }

  // This function removes a note from the list
  function deleteNote(index) {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      {/* Title */}
      <h1>Notes App</h1>

      {/* Input field */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
      />

      {/* Add button */}
      <button onClick={addNote}>Add Note</button>

      {/* List of notes */}
      <ul>
        {/* map() goes through each note and displays it */}
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            {/* Delete button */}
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Total number of notes */}
      <p>Total Notes: {notes.length}</p>
    </div>
  );
}

export default App;