import React from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };
  
  return (
    <div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">-- Выберите город --</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Новосибирск">Новосибирск</option>
        <option value="Екатеринбург">Екатеринбург</option>
        <option value="Казань">Казань</option>
      </select>
      
      {selectedCity && (
        <p>Ваш выбор: {selectedCity}</p>
      )}
    </div>
  );
}


export default App;





