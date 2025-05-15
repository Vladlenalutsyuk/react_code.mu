import React from 'react';

function App() {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <h2>Статус пользователя:</h2>
      <p style={{ color: isBanned ? 'red' : 'green' }}>
        {isBanned ? '🚫 Пользователь забанен' : '✅ Пользователь активен'}
      </p>
      
      {isBanned ? (
        <button 
          onClick={() => setIsBanned(false)}
          style={{ backgroundColor: 'lightgreen' }}
        >
          Разбанить
        </button>
      ) : (
        <button 
          onClick={() => setIsBanned(true)}
          style={{ backgroundColor: 'salmon' }}
        >
          Забанить
        </button>
      )}
    </div>
  );
}

export default App;
