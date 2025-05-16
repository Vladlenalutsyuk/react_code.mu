import React from 'react';
import './styles.css'; // Импортируем CSS файл

function App() {
  return (
    <div className="container">
      <h2>Кнопки с глобальными стилями</h2>
      <button className="btn-primary">Основная кнопка</button>
      <button className="btn-secondary">Дополнительная кнопка</button>
    </div>
  );
}

export default App;