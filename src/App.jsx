import React from 'react';
function App() {
  // Функция для вычисления суммы цифр числа
  function getDigitsSum(num) {
    return String(num)
      .split('')
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
  }

  return (
    <p>
      Сумма цифр числа 12345: {getDigitsSum(12345)}
    </p>
  );
}
 
export default App;