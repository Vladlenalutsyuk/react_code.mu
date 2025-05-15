import React from 'react';




function fahrenheitToCelsius(f) {
  return ((f - 32) * 5/9).toFixed(1);
}

function App() {
  const [fahrenheit, setFahrenheit] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
        placeholder="Градусы Фаренгейта"
        style={{ padding: '8px', width: '200px' }}
      />
      <p>
        {fahrenheit ? `${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit)}°C` : 'Введите температуру'}
      </p>
    </div>
  );
}



export default App;
