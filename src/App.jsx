import React from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    const digits = number.toString().split('').map(Number);
    setSum(digits.reduce((acc, digit) => acc + digit, 0));
  };

  return (
    <div>
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(e.target.value)}
        onBlur={calculateSum}
      />
      <p>Сумма цифр: {sum}</p>
    </div>
  );
}

export default App;
