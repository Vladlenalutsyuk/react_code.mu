import React from 'react';

function App() {
  const [ageGroup, setAgeGroup] = useState('');
  
  const handleChange = (event) => {
    setAgeGroup(event.target.value);
  };
  
  return (
    <div>
      <h3>Выберите вашу возрастную группу:</h3>
      <select value={ageGroup} onChange={handleChange}>
        <option value="">-- Выберите возраст --</option>
        <option value="0-12">от 0 до 12 лет</option>
        <option value="13-17">от 13 до 17 лет</option>
        <option value="18-25">от 18 до 25 лет</option>
        <option value="25+">старше 25 лет</option>
      </select>
      
      {ageGroup && (
        <p>
          {ageGroup === '0-12' && 'Вы выбрали группу: дети (0-12 лет)'}
          {ageGroup === '13-17' && 'Вы выбрали группу: подростки (13-17 лет)'}
          {ageGroup === '18-25' && 'Вы выбрали группу: молодежь (18-25 лет)'}
          {ageGroup === '25+' && 'Вы выбрали группу: взрослые (25+ лет)'}
        </p>
      )}
    </div>
  );
}



export default App;





