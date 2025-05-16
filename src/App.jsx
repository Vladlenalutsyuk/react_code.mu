// App.js
import React from 'react';
import { styles } from './styles';

function App() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Кнопки с вынесенными стилями</h2>
      <button 
        style={styles.getHoverStyle('#3498db', '#2980b9')}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
      >
        Основная кнопка
      </button>
      <button 
        style={styles.getHoverStyle('#2ecc71', '#27ae60')}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#27ae60'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#2ecc71'}
      >
        Дополнительная кнопка
      </button>
    </div>
  );
}

export default App;