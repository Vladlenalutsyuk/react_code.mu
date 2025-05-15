import React from 'react';
import React, { useState } from 'react';

function App() {
  // Стейты для данных пользователя
  const [name, setName] = useState('Иван');
  const [surname, setSurname] = useState('Иванов');
  const [age, setAge] = useState(30);

  return (
    <div>
      <h2>Данные пользователя:</h2>
      <ul>
        <li>Имя: <span>{name}</span></li>
        <li>Фамилия: <span>{surname}</span></li>
        <li>Возраст: <span>{age}</span></li>
      </ul>
    </div>
  );
}


export default App;