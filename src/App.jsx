import React from 'react';


function App() {
  const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'];
  const [selectedCity, setSelectedCity] = useState('');
  
  const cityOptions = cities.map((city, index) => (
    <option key={index} value={city}>
      {city}
    </option>
  ));

  return (
    <div>
      <select 
        value={selectedCity} 
        onChange={(event) => setSelectedCity(event.target.value)}
      >
        <option value="">-- Выберите город --</option>
        {cityOptions}
      </select>
      
      {selectedCity && (
        <p>Ваш выбор: {selectedCity}</p>
      )}
    </div>
  );
}



export default App;





