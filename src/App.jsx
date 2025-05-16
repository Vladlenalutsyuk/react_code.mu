import React, { useState } from 'react';

// Функция для генерации id
function id() {
  return Math.random().toString(36).substring(2, 9);
}

// Инициализационные данные
const initUsers = [
  {id: id(), name: 'user1', surname: 'surn1', age: 30},
  {id: id(), name: 'user2', surname: 'surn2', age: 31},
  {id: id(), name: 'user3', surname: 'surn3', age: 32},
];

// Компонент User для отображения данных одного пользователя
function User({ name, surname, age }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      margin: '10px',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9'
    }}>
      <p><strong>Имя:</strong> {name}</p>
      <p><strong>Фамилия:</strong> {surname}</p>
      <p><strong>Возраст:</strong> {age}</p>
    </div>
  );
}

// Родительский компонент Users
function Users() {
  const [users, setUsers] = useState(initUsers);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Список пользователей</h2>
      {users.map(user => (
        <User
          key={user.id}
          name={user.name}
          surname={user.surname}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default Users;