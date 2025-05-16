import { useState } from 'react';

// Функция для генерации id (предполагаемая реализация)
function id() {
  return Math.random().toString(36).substring(2, 9);
}

const initNotes = [
  {
    id: id(),
    name: 'name1',
    desc: 'long description 1',
    show: false,
  },
  {
    id: id(),
    name: 'name2',
    desc: 'long description 2',
    show: false,
  },
  {
    id: id(),
    name: 'name3',
    desc: 'long description 3',
    show: false,
  },
];

function App() {
  const [notes, setNotes] = useState(initNotes);
  
  const toggleDesc = (id) => {
    setNotes(notes.map(note => {
      if (note.id === id) {
        return { ...note, show: !note.show };
      }
      return note;
    }));
  };
  
  const result = notes.map(note => {
    return (
      <p key={note.id}>
        {note.name}, 
        {note.show && <i>{note.desc}</i>}
        <button onClick={() => toggleDesc(note.id)}>
          {note.show ? 'Скрыть' : 'Показать'} описание
        </button>
      </p>
    );
  });
  
  return <div>{result}</div>;
}

export default App;