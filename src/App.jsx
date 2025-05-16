import React from 'react';

function App() {
  const [selectedValue, setSelectedValue] = useState('1');
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  return (
    <div>
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="1"
          checked={selectedValue === '1'}
          onChange={handleChange}
        />
        Вариант 1
      </label>
      
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="2"
          checked={selectedValue === '2'}
          onChange={handleChange}
        />
        Вариант 2
      </label>
      
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="3"
          checked={selectedValue === '3'}
          onChange={handleChange}
        />
        Вариант 3
      </label>
      
      <p>Вы выбрали: {selectedValue}</p>
    </div>
  );
}


export default App;





