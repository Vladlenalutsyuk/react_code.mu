import { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Решение задачи №1: Возведение в квадрат
  const squareNumber = (index) => {
    setNumbers(numbers.map((num, i) => 
      i === index ? num * num : num
    ));
  };

  // Решение задачи №2: Удаление элемента
  const deleteItem = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  // Решение задачи №3: Перенос текста в инпут
  const editItem = (index) => {
    setInputValue(numbers[index]);
    setEditIndex(index);
  };

  // Решение задачи №4: Сохранение изменений
  const saveEdit = () => {
    if (editIndex !== null) {
      setNumbers(numbers.map((num, i) => 
        i === editIndex ? Number(inputValue) : num
      ));
      setEditIndex(null);
      setInputValue('');
    }
  };

  // Решение задачи №5: Реверс массива
  const reverseList = () => {
    setNumbers([...numbers].reverse());
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Реактивные операции с массивом</h2>
      
      {/* Инпут для редактирования (задачи 3-4) */}
      <div style={{ marginBottom: '15px' }}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={saveEdit}
          placeholder="Редактировать элемент"
        />
      </div>
      
      {/* Кнопка реверса (задача 5) */}
      <button 
        onClick={reverseList}
        style={{ marginBottom: '15px', padding: '5px 10px' }}
      >
        Перевернуть список
      </button>
      
      {/* Список элементов */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {numbers.map((num, index) => (
          <li 
            key={index}
            style={{ 
              padding: '8px',
              margin: '5px 0',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {/* Клик по элементу (задачи 1 и 3) */}
            <span 
              onClick={() => {
                squareNumber(index); // задача 1
                editItem(index);    // задача 3
              }}
              style={{ cursor: 'pointer', flexGrow: 1 }}
            >
              {num}
            </span>
            
            {/* Кнопка удаления (задача 2) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteItem(index);
              }}
              style={{ 
                marginLeft: '10px',
                padding: '2px 6px',
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;