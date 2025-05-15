import React from 'react';

function App() {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <p>Статус: {isBanned ? 'Забанен' : 'Активен'}</p>
      
      <button onClick={() => setIsBanned(true)}>
        Забанить
      </button>
      
      <button onClick={() => setIsBanned(false)}>
        Разбанить
      </button>
    </div>
  );
}

export default App;