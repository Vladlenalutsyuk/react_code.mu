import React from 'react';

// Компонент User
function User() {
  return (
    <div>
      <h3>Информация о пользователе</h3>
      <p>Имя: Иван Иванов</p>
      <p>Email: ivan@example.com</p>
    </div>
  );
}

// Компонент App с использованием User
function App() {
  return (
    <div>
      <h1>Приложение для работы с пользователями</h1>
      <User />
    </div>
  );
}

export default App;