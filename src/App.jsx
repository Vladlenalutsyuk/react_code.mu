import React from 'react';


function App() {
  // Стейты для данных пользователя
  const [name, setName] = useState('Иван');
  const [surname, setSurname] = useState('Иванов');

  // Функции для изменения данных
  const changeName = () => setName('Пётр');
  const changeSurname = () => setSurname('Петров');
  const resetAll = () => {
    setName('Иван');
    setSurname('Иванов');
  };

  return (
    <div>
      <h2>Данные пользователя:</h2>
      <p>Имя: <strong>{name}</strong></p>
      <p>Фамилия: <strong>{surname}</strong></p>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={changeName}>Изменить имя</button>
        <button onClick={changeSurname} style={{ marginLeft: '10px' }}>
          Изменить фамилию
        </button>
        <button onClick={resetAll} style={{ marginLeft: '10px' }}>
          Сбросить
        </button>
      </div>
    </div>
  );
}


export default App;