import React from 'react';


// Функция для вычисления среднего арифметического
function getAverage(arr) {
  if (arr.length === 0) return 0;
  
  const sum = arr.reduce((acc, num) => acc + Number(num), 0);
  return sum / arr.length;
}

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleChange = (index, event) => {
    const newValue = event.target.value;
    setNumbers(prevNumbers => [
      ...prevNumbers.slice(0, index),
      newValue === '' ? '' : newValue, // Обработка пустой строки
      ...prevNumbers.slice(index + 1)
    ]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Редактирование массива</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        {numbers.map((num, index) => (
          <input
            key={index}
            type="number"
            value={num}
            onChange={(e) => handleChange(index, e)}
            style={{ width: '50px', padding: '5px' }}
          />
        ))}
      </div>
      
      <div>
        <h3>Текущий массив:</h3>
        <p>[{numbers.join(', ')}]</p>
        
        <h3>Среднее арифметическое:</h3>
        <p>{getAverage(numbers).toFixed(2)}</p>
      </div>
    </div>
  );
}


export default App;





