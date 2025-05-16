import React from 'react';

// Компонент User (улучшенная версия с props)
function User({ name, email, age }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>Информация о пользователе</h3>
      <p><strong>Имя:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      {age && <p><strong>Возраст:</strong> {age}</p>}
    </div>
  );
}

// Компонент App с несколькими пользователями
function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ color: 'darkblue' }}>Список пользователей</h1>
      
      <User 
        name="Иван Иванов" 
        email="ivan@example.com" 
        age={28} 
      />
      
      <User 
        name="Мария Петрова" 
        email="maria@example.com" 
        age={24}
      />
      
      <User 
        name="Алексей Сидоров" 
        email="alex@example.com" 
      />
      
      <User 
        name="Елена Васильева" 
        email="elena@example.com" 
        age={31}
      />
    </div>
  );
}

export default App;