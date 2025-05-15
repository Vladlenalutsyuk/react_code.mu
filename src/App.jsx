import React from 'react';

function App() {
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage(checked ? 'Привет, пользователь!' : 'До свидания!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          id="greeting-checkbox"
        />
        <label htmlFor="greeting-checkbox" style={{ marginLeft: '5px' }}>
          {checked ? 'Отмечено' : 'Не отмечено'}
        </label>
      </div>
      
      <button 
        onClick={handleClick}
        style={{ padding: '5px 10px', marginBottom: '10px' }}
      >
        Показать сообщение
      </button>
      
      <p style={{ fontSize: '18px' }}>{message}</p>
    </div>
  );
}


export default App;
