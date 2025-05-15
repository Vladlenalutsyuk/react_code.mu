import React from 'react';

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите текст"
        style={{ padding: '8px', width: '300px' }}
      />
      <p>Количество символов: {text.length}</p>
    </div>
  );
}


export default App;
