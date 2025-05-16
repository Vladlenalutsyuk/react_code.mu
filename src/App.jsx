import React from 'react';

// Функция для генерации id (предполагаемая реализация)
function id() {
  return Math.random().toString(36).substring(2, 9);
}

// Компонент User для вывода данных в строке таблицы
function User({ name, surn, age }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surn}</td>
      <td>{age}</td>
    </tr>
  );
}

// Компонент App с таблицей пользователей
function App() {
  const users = [
    {id: id(), name: 'user1', surn: 'surn1', age: 30},
    {id: id(), name: 'user2', surn: 'surn2', age: 31},
    {id: id(), name: 'user3', surn: 'surn3', age: 32},
  ];

  return (
    <div style={{ margin: '20px' }}>
      <h2>Список пользователей</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          <User name={users[0].name} surn={users[0].surn} age={users[0].age} />
          <User name={users[1].name} surn={users[1].surn} age={users[1].age} />
          <User name={users[2].name} surn={users[2].surn} age={users[2].age} />
        </tbody>
      </table>
    </div>
  );
}

export default App;