import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleFillInputs = (id) => {
    const note = notes.find(note => note.id === id);
    if (note) {
      setInput1(note.prop1);
      setInput2(note.prop2);
      setInput3(note.prop3);
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
      </div>
      <ul>{result}</ul>
    </div>
  );
}

export default App;