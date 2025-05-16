import React from 'react';

function App() {
  // Основные цвета
  const primaryColor = '#3498db';
  const primaryHover = '#2980b9';
  const secondaryColor = '#2ecc71';
  const secondaryHover = '#27ae60';
  const bgColor = '#f8f9fa';
  const textColor = '#2c3e50';
  const white = 'white';

  // Размеры и отступы
  const containerMargin = '20px';
  const containerPadding = '20px';
  const buttonPadding = '10px 20px';
  const buttonMargin = '0 10px';
  const titleMarginBottom = '15px';
  const maxWidth = '500px';

  // Границы
  const containerBorder = '2px solid #3498db';
  const borderRadius = '8px';
  const noBorder = 'none';

  // Текст
  const textAlign = 'center';
  const fontSize = '16px';

  // Эффекты
  const transition = 'background-color 0.3s';
  const cursorPointer = 'pointer';

  return (
    <div style={{
      margin: containerMargin,
      padding: containerPadding,
      border: containerBorder,
      borderRadius: borderRadius,
      backgroundColor: bgColor,
      textAlign: textAlign,
      maxWidth: maxWidth
    }}>
      <h2 style={{
        color: textColor,
        marginBottom: titleMarginBottom
      }}>
        Кнопки с переменными стилей
      </h2>
      
      <button 
        style={{
          padding: buttonPadding,
          margin: buttonMargin,
          border: noBorder,
          borderRadius: borderRadius,
          cursor: cursorPointer,
          fontSize: fontSize,
          transition: transition,
          backgroundColor: primaryColor,
          color: white
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = primaryHover}
        onMouseLeave={(e) => e.target.style.backgroundColor = primaryColor}
      >
        Основная кнопка
      </button>
      
      <button 
        style={{
          padding: buttonPadding,
          margin: buttonMargin,
          border: noBorder,
          borderRadius: borderRadius,
          cursor: cursorPointer,
          fontSize: fontSize,
          transition: transition,
          backgroundColor: secondaryColor,
          color: white
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = secondaryHover}
        onMouseLeave={(e) => e.target.style.backgroundColor = secondaryColor}
      >
        Дополнительная кнопка
      </button>
    </div>
  );
}

export default App;