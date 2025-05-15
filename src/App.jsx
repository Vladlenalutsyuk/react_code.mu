import React from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="number" 
        value={num1} 
        onChange={e => setNum1(Number(e.target.value))} 
        style={{ marginRight: '10px' }}
      />
      <input 
        type="number" 
        value={num2} 
        onChange={e => setNum2(Number(e.target.value))} 
      />
      
      <div style={{ marginTop: '10px' }}>
        <button 
          onClick={() => setResult(num1 + num2)}
          style={{ marginRight: '10px' }}
        >
          Сумма
        </button>
        <button onClick={() => setResult(num1 * num2)}>
          Произведение
        </button>
      </div>
      
      <p style={{ marginTop: '10px', fontSize: '18px' }}>
        Результат: {result}
      </p>
    </div>
  );
}

export default App;
