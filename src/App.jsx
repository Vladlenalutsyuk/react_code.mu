import React from 'react';
import { nanoid } from 'nanoid';

// Функция-обертка для генерации ID с помощью nanoid
function id() {
  return nanoid(); // Генерирует ID типа "V1StGXR8_Z5jdHi6B-myT"
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