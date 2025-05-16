import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState('');
  
  const handleAddNote = () => {
    if (inputValue.trim()) {  // Проверяем, что строка не пустая
      // Иммутабельно добавляем новый элемент из инпута
      setNotes([...notes, inputValue]);
      setInputValue('');  // Очищаем инпут после добавления
    }
  };
  
  return (
    <div>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите текст"
        />
        <button onClick={handleAddNote}>Добавить</button>
      </div>
    </div>
  );
}

export default App;