import React, { useState } from 'react';

// Компонент для ввода температуры
function TempInp({ temp, setTemp }) {
  return (
    <input 
      type="number" 
      value={temp}
      onChange={(e) => setTemp(Number(e.target.value))}
      placeholder="Введите температуру"
    />
  );
}

// Компонент для вывода вердикта
function Verdict({ temp }) {
  let state;
  if (temp <= 0) {
    state = "твёрдая (лёд)";
  } else if (temp >= 100) {
    state = "газообразная (пар)";
  } else {
    state = "жидкая";
  }

  return (
    <p>
      При {temp}°C вода находится в {state} состоянии
    </p>
  );
}

// Основной компонент-контейнер
function Calculator() {
  const [temp, setTemp] = useState(20); // Начальная температура 20°C

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>Калькулятор состояния воды</h2>
      <TempInp temp={temp} setTemp={setTemp} />
      <Verdict temp={temp} />
    </div>
  );
}

export default Calculator;