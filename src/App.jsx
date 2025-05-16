import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(initNotes);

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const result = notes.map(note => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span>
        <span>{note.prop2}</span>
        <span>{note.prop3}</span>
        <button onClick={() => handleDelete(note.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div>
      <ul>{result}</ul>
    </div>
  );
}

export default App;