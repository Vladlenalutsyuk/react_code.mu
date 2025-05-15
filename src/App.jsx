import React from 'react';

function App() {
  const [values, setValues] = useState([0, 0, 0, 0, 0]);

  const handleChange = (index) => (event) => {
    const newValues = [...values];
    newValues[index] = Number(event.target.value) || 0;
    setValues(newValues);
  };

  const average = values.reduce((sum, num) => sum + num, 0) / values.length;

  return (
    <div style={{ padding: '20px' }}>
      {values.map((value, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="number"
            value={value}
            onChange={handleChange(index)}
            placeholder={`Число ${index + 1}`}
            style={{ padding: '8px', width: '200px' }}
          />
        </div>
      ))}
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Среднее арифметическое: {average.toFixed(2)}
      </p>
    </div>
  );
}


export default App;
