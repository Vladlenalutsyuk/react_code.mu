import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const handleFillInputs = (id) => {
    const note = notes.find(note => note.id === id);
    if (note) {
      setInput1(note.prop1);
      setInput2(note.prop2);
      setInput3(note.prop3);
      setSelectedId(id); // Запоминаем id выбранной заметки
    }
  };

  const handleUpdateNote = () => {
    if (selectedId) {
      setNotes(notes.map(note => {
        if (note.id === selectedId) {
          return { ...note, prop1: input1, prop2: input2, prop3: input3 };
        }
        return note;
      }));
    }
  };

  const result = notes.map(note => {
    return (
      <li key={note.id}>
        <span>{note.prop1}</span>
        <span>{note.prop2}</span>
        <span>{note.prop3}</span>
        <button onClick={() => handleFillInputs(note.id)}>Fill Inputs</button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <input value={input1} onChange={(e) => setInput1(e.target.value)} />
        <input value={input2} onChange={(e) => setInput2(e.target.value)} />
        <input value={input3} onChange={(e) => setInput3(e.target.value)} />
        <button onClick={handleUpdateNote} disabled={!selectedId}>
          Update Note
        </button>
      </div>
      <ul>{result}</ul>
    </div>
  );
}

export default App;