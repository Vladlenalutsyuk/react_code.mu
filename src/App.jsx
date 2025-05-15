import React from 'react';
function App() {
  const [text, setText] = useState('');

  const calculateSum = () => {
    const lines = text.split('\n');
    return lines.reduce((sum, line) => {
      const num = Number(line.trim()) || 0;
      return sum + num;
    }, 0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Введите числа, каждое с новой строки"
        style={{ width: '300px', height: '100px', padding: '8px' }}
      />
      <p style={{ marginTop: '10px' }}>
        Сумма чисел: <strong>{calculateSum()}</strong>
      </p>
    </div>
  );
}


export default App;
