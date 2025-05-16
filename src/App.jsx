import { useState } from 'react';

function App() {
  const [date, setDate] = useState({
    year: 2025,
    month: 12,
    day: 31
  });

  // Функция для получения дня недели
  function getDayOfWeek(year, month, day) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dateObj = new Date(year, month - 1, day);
    return days[dateObj.getDay()];
  }

  // Обработчик изменения даты
  function handleDateChange(field, event) {
    const value = event.target.value;
    setDate(prevDate => ({
      ...prevDate,
      [field]: value === '' ? '' : Number(value)
    }));
  }

  // Проверка валидности даты
  function isValidDate(year, month, day) {
    const dateObj = new Date(year, month - 1, day);
    return (
      dateObj.getFullYear() === year &&
      dateObj.getMonth() === month - 1 &&
      dateObj.getDate() === day
    );
  }

  const dateValid = isValidDate(date.year, date.month, date.day);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Редактирование даты</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>
          День:
          <input
            type="number"
            value={date.day}
            onChange={(e) => handleDateChange('day', e)}
            min="1"
            max="31"
            style={{ marginLeft: '5px', width: '50px' }}
          />
        </label>
        
        <label style={{ marginLeft: '10px' }}>
          Месяц:
          <input
            type="number"
            value={date.month}
            onChange={(e) => handleDateChange('month', e)}
            min="1"
            max="12"
            style={{ marginLeft: '5px', width: '50px' }}
          />
        </label>
        
        <label style={{ marginLeft: '10px' }}>
          Год:
          <input
            type="number"
            value={date.year}
            onChange={(e) => handleDateChange('year', e)}
            min="1900"
            max="2100"
            style={{ marginLeft: '5px', width: '70px' }}
          />
        </label>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h3>Результат:</h3>
        {dateValid ? (
          <p>
            {date.day}.{date.month}.{date.year} - {getDayOfWeek(date.year, date.month, date.day)}
          </p>
        ) : (
          <p style={{ color: 'red' }}>Некорректная дата!</p>
        )}
      </div>
    </div>
  );
}

export default App;