import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  
  const addNote = () => {
    // Иммутабельно добавляем новый элемент (число на 1 больше последнего)
    setNotes([...notes, notes.length + 1]);
  };
  
  return (
    <div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <button onClick={addNote}>Добавить элемент</button>
    </div>
  );
}

export default App;