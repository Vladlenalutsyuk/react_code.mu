import React from 'react';

function App() {
  return (
    <div style={{
      margin: '20px',
      padding: '20px',
      border: '2px solid #3498db',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa',
      textAlign: 'center',
      maxWidth: '500px'
    }}>
      <h2 style={{
        color: '#2c3e50',
        marginBottom: '15px'
      }}>
        Кнопки с inline-стилями
      </h2>
      
      <button 
        style={{
          padding: '10px 20px',
          margin: '0 10px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
          backgroundColor: '#3498db',
          color: 'white'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Основная кнопка
      </button>
      
      <button 
        style={{
          padding: '10px 20px',
          margin: '0 10px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
          backgroundColor: '#2ecc71',
          color: 'white'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#27ae60'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#2ecc71'}
      >
        Дополнительная кнопка
      </button>
    </div>
  );
}

export default App;