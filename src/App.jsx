import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // для генерации уникальных id

const initNotes = [
  {
    id: 'GYi9G_uC4gBF1e2SixDvu',
    prop1: 'value11',
    prop2: 'value12',
    prop3: 'value13',
  },
  {
    id: 'IWSpfBPSV3SXgRF87uO74',
    prop1: 'value21',
    prop2: 'value22',
    prop3: 'value23',
  },
  {
    id: 'JAmjRlfQT8rLTm5tG2m1L',
    prop1: 'value31',
    prop2: 'value32',
    prop3: 'value33',
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);
  
  const addNewNote = () => {
    const newNote = {
      id: uuidv4(),
      prop1: `value${notes.length + 1}1`,
      prop2: `value${notes.length + 1}2`,
      prop3: `value${notes.length + 1}3`,
    };
    setNotes([...notes, newNote]);
  };
  
  return (
    <div>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <span>{note.prop1}</span>
            <span>{note.prop2}</span>
            <span>{note.prop3}</span>
          </li>
        ))}
      </ul>
      <button onClick={addNewNote}>Добавить элемент</button>
    </div>
  );
}

export default App;