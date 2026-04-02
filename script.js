// We use React from the CDN, so we grab useState like this:
const { useState } = React;

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  function addNote() {
    if (input !== '') {
      setNotes([...notes, input]);
      setInput('');
    }
  }

  function deleteNote(index) {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  }

  return (
    <div className="App">
      <h1>Notes App</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Write a note..." 
      />
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total Notes: {notes.length}</p>
    </div>
  );
}

// This is the "Magic" line that renders your app to the screen
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
