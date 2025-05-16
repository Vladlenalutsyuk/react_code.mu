import React, { useState } from 'react';

function TemperatureConverter() {
  const [temp, setTemp] = useState({ value: 0, scale: 'c' });

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function handleCelsiusChange(e) {
    setTemp({ value: e.target.value, scale: 'c' });
  }

  function handleFahrenheitChange(e) {
    setTemp({ value: e.target.value, scale: 'f' });
  }

  const celsius = temp.scale === 'c' ? parseFloat(temp.value) : toCelsius(temp.value);
  const fahrenheit = temp.scale === 'f' ? parseFloat(temp.value) : toFahrenheit(temp.value);

  return (
    <div>
      <h2>Конвертер температур</h2>
      <div>
        <label>Градусы Цельсия: </label>
        <input 
          type="number" 
          value={celsius} 
          onChange={handleCelsiusChange} 
        />
      </div>
      <div>
        <label>Градусы Фаренгейта: </label>
        <input 
          type="number" 
          value={fahrenheit} 
          onChange={handleFahrenheitChange} 
        />
      </div>
    </div>
  );
}

export default TemperatureConverter;