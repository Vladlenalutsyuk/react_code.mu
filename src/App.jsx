import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState(initNotes);
  const [inputValues, setInputValues] = useState({
    prop1: '',
    prop2: '',
    prop3: ''
  });

  const handleInputChange = (prop, value) => {
    setInputValues({
      ...inputValues,
      [prop]: value
    });
  };

  const addNoteFromInputs = () => {
    if (inputValues.prop1 && inputValues.prop2 && inputValues.prop3) {
      const newNote = {
        id: uuidv4(),
        ...inputValues
      };
      setNotes([...notes, newNote]);
      setInputValues({ prop1: '', prop2: '', prop3: '' });
    }
  };

  return (
    <div>
      <div>
        <input
          value={inputValues.prop1}
          onChange={(e) => handleInputChange('prop1', e.target.value)}
          placeholder="Значение 1"
        />
        <input
          value={inputValues.prop2}
          onChange={(e) => handleInputChange('prop2', e.target.value)}
          placeholder="Значение 2"
        />
        <input
          value={inputValues.prop3}
          onChange={(e) => handleInputChange('prop3', e.target.value)}
          placeholder="Значение 3"
        />
        <button onClick={addNoteFromInputs}>Добавить</button>
      </div>
      
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <span>{note.prop1}</span>
            <span>{note.prop2}</span>
            <span>{note.prop3}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;