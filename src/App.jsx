import React from 'react';
import uuid from 'react-uuid';

// Функция-обертка для генерации ID с помощью react-uuid
function id() {
  return uuid(); // Генерирует UUID типа "2d5f3b4e-5b7e-4b3e-9e5d-3b3e5b7e4b3e"
}

// Пример использования
function App() {
  const items = [
    { name: 'Item 1', id: id() },
    { name: 'Item 2', id: id() },
    { name: 'Item 3', id: id() }
  ];

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name} (ID: {item.id})</li>
      ))}
    </ul>
  );
}
export default App;