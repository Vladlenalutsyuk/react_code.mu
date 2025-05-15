import React from 'react';


function getBirthYear(age) {
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}

function App() {
  const [age, setAge] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Введите ваш возраст"
        style={{ padding: '8px', width: '200px' }}
      />
      <p>
        {age ? `Ваш год рождения: ${getBirthYear(Number(age))}` : 'Введите возраст'}
      </p>
    </div>
  );
}


export default App;
