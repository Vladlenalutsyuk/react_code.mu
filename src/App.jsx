import React from 'react';



function App() {
  // Стейты для каждого инпута
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          value={input1Value}
          onChange={(e) => setInput1Value(e.target.value)}
          placeholder="Первый инпут"
          style={{ padding: '8px', width: '200px' }}
        />
        <p>Текст первого инпута: {input1Value}</p>
      </div>

      <div>
        <input
          type="text"
          value={input2Value}
          onChange={(e) => setInput2Value(e.target.value)}
          placeholder="Второй инпут"
          style={{ padding: '8px', width: '200px' }}
        />
        <p>Текст второго инпута: {input2Value}</p>
      </div>
    </div>
  );
}



export default App;
