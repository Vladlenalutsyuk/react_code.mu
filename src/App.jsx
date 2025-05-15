import React from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';

function IdGenerator() {
  return (
    <div>
      <h2>Генерация ID</h2>
      
      <h3>Nanoid:</h3>
      <p>{nanoid()}</p>
      
      <h3>React UUID:</h3>
      <p>{uuid()}</p>
      
      <h3>Пример использования в списке:</h3>
      <ul>
        {[1, 2, 3].map(() => (
          <li key={nanoid()}>Элемент с nanoid ключом</li>
        ))}
      </ul>
    </div>
  );
}
export default App;