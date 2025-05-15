import React from 'react';


function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Текущее значение: {count}
      </p>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={increment}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            marginRight: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Увеличить (+)
        </button>
        
        <button 
          onClick={decrement}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Уменьшить (-)
        </button>
      </div>
    </div>
  );
}

export default App;
