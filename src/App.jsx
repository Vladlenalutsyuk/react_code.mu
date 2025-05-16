import React from 'react';

// Компонент Employee с деструктуризацией props
function Employee({ lastName, firstName, middleName, salary }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Данные сотрудника:</h3>
      <p><strong>Фамилия:</strong> {lastName}</p>
      <p><strong>Имя:</strong> {firstName}</p>
      <p><strong>Отчество:</strong> {middleName}</p>
      <p><strong>Зарплата:</strong> {salary} руб.</p>
    </div>
  );
}

// Компонент App с тремя сотрудниками
function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Список сотрудников компании</h1>
      
      <Employee
        lastName="Иванов"
        firstName="Иван"
        middleName="Иванович"
        salary={85000}
      />
      
      <Employee
        lastName="Петрова"
        firstName="Мария"
        middleName="Сергеевна"
        salary={92000}
      />
      
      <Employee
        lastName="Сидоров"
        firstName="Алексей"
        middleName="Петрович"
        salary={78000}
      />
    </div>
  );
}

export default App;