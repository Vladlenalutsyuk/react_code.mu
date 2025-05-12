import React from 'react';
function App() {
  // Функция для вычисления суммы цифр числа
  function getDigitsSum(num) {
    return String(num)
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  const number = 123;
  const sum = getDigitsSum(number);

  return <div>Сумма цифр числа {number}: {sum}</div>;
}
 
export default App;