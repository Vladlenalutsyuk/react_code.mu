import React from 'react';
function App() {
  const items = []; // Создаем пустой массив для хранения <li> элементов
  
  // Заполняем массив в цикле
  for (let i = 1; i <= 5; i++) {
    items.push(<li key={i}>{i}</li>); // Добавляем <li> с уникальным key
  }
  
  return (
    <ul>
      {items}
    </ul>
  );
}
export default App;