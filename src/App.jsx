import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);
  
  // Вычисляемое значение вместо отдельного стейта
  const value = editNum !== null ? notes[editNum] : '';

  const result = notes.map((note, id) => {
    return (
      <p key={id} onClick={() => setEditNum(id)}>
        {note}
      </p>
    );
  });

  function changeItem(event) {
    if (editNum !== null) {
      const newNotes = [...notes];
      newNotes[editNum] = Number(event.target.value);
      setNotes(newNotes);
    }
  }

  return (
    <div>
      {result}
      {editNum !== null && (
        <input 
          type="number"
          value={value} 
          onChange={changeItem} 
          onBlur={() => setEditNum(null)}
          autoFocus
        />
      )}
    </div>
  );
}

export default App;