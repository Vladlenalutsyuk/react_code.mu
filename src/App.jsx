import React from 'react';

function App() {
  const today = new Date().toISOString().split('T')[0];
  const [date1, setDate1] = useState(today);
  const [date2, setDate2] = useState(today);
  const [diffDays, setDiffDays] = useState(0);

  const calculateDiff = () => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    setDiffDays(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  return (
    <div>
      <input 
        type="date" 
        value={date1} 
        onChange={e => setDate1(e.target.value)} 
      />
      <input 
        type="date" 
        value={date2} 
        onChange={e => setDate2(e.target.value)} 
      />
      <button onClick={calculateDiff}>Рассчитать разницу</button>
      <p>Разница: {diffDays} дней</p>
    </div>
  );
}

export default App;
