import React from 'react';


function App() {
  const [value, setValue] = useState('Привет, React!');
  
  return (
    <div>
      <h3>Пример с defaultValue:</h3>
      <input 
        type="text" 
        defaultValue={value} 
        placeholder="Введите текст"
      />
      <p>Текущее состояние: {value}</p>
      <button onClick={() => setValue('Новое значение')}>
        Изменить состояние
      </button>
      <p><small>Обратите внимание, что изменение состояния не влияет на значение инпута</small></p>
    </div>
  );
}

export default App;





