import React, { useState } from 'react';

function getSum(arr) {
  return arr.reduce((sum, elem) => sum + Number(elem), 0);
}

function Calculator() {
  const [value, setValue] = useState('');
  const [nums, setNums] = useState([1, 2, 3]);
  
  const sum = getSum(nums); // Вычисляем сумму при каждом рендере

  function handleChange(event) {
    setValue(event.target.value);
  }
  
  function handleBlur(event) {
    if (event.target.value) {
      setNums([...nums, Number(event.target.value)]);
      setValue('');
    }
  }
  
  return (
    <div>
      <p>Сумма: {sum}</p>
      <input 
        type="number"
        value={value} 
        onChange={handleChange} 
        onBlur={handleBlur} 
        placeholder="Добавить число"
      />
      <p>Числа: {nums.join(', ')}</p>
    </div>
  );
}

export default Calculator;