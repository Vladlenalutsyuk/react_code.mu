import React from 'react';
import { nanoid } from 'nanoid'; // или import uuid from 'react-uuid';

// Функция для генерации ID
function id() {
  return nanoid(); // или return uuid(); для UUID
}

// Массив пользователей с автоматически сгенерированными ID
const users = [
  {id: id(), name: 'user1', surn: 'surn1', age: 30},
  {id: id(), name: 'user2', surn: 'surn2', age: 31},
  {id: id(), name: 'user3', surn: 'surn3', age: 32},
];

function App() {
  return (
    <div>
      <h2>Список пользователей:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} {user.surn}, возраст: {user.age} (ID: {user.id})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;